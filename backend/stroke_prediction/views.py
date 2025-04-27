from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response

import pandas as pd
import environ
import pickle
import os

# Create your views here.
class StrokeProbability(APIView):

    permission_classes = [AllowAny]
    authentication_classes = []

    def standardize(self, parameter, value):

        env = environ.Env()
        environ.Env.read_env()

        min_age = float(env('MIN_AGE'))
        min_glucose = float(env('MIN_GLUCOSE'))
        min_bmi = float(env('MIN_BMI'))

        max_age = float(env('MAX_AGE'))
        max_glucose = float(env('MAX_GLUCOSE'))
        max_bmi = float(env('MAX_BMI'))

        if parameter == "age":
            std_age = (value - min_age) / (max_age - min_age)
            return std_age

        elif parameter == "glucose":
            std_glucose = (value - min_glucose) / (max_glucose - min_glucose)
            return std_glucose

        else:
            std_bmi = (value - min_bmi) / (max_bmi - min_bmi)
            return std_bmi

    def encode_marriage(self, value):

        if value == "yes":
            return 1, 0
        else:
            return 0, 1

    def encode_worktype(self, value):
        if value == "children":
            return 0,0,0,0,1
        elif value == "never_worked":
            return 0,1,0,0,0
        elif value == "self_employed":
            return 0,0,0,1,0
        elif value == "govt_job":
            return 1,0,0,0,0
        else:
            return 0,0,1,0,0

    def encode_residence(self, value):
        if value == "urban":
            return 0, 1
        else:
            return 1, 0

    def encode_gender(self, value):
        if value == "female":
            return 1,0,0
        elif value == "male":
            return 0,1,0
        else:
            return 0,0,1

    def encode_smoking(self, value):
        if value == "unknown":
            return 1,0,0,0
        elif value == "former":
            return 0,1,0,0
        elif value == "never":
            return 0,0,1,0
        else:
            return 0,0,0,1

    def get(self, request):

        gender = request.GET['gender']
        age = request.GET['age']
        hypertension = request.GET['hypertension']
        heart_disease = request.GET['heart_disease']
        ever_married = request.GET['ever_married']
        work_type = request.GET['work_type']
        residence_type = request.GET['residence_type']
        avg_glucose_level = request.GET['avg_glucose_level']
        bmi = request.GET['bmi']
        smoking_status = request.GET['smoking_status']

        #Standardize the values
        std_age = self.standardize("age", float(age))
        std_glucose = self.standardize("glucose", float(avg_glucose_level))
        std_bmi = self.standardize("bmi", float(bmi))

        #Encode marriage
        married_yes, married_no = self.encode_marriage(ever_married)

        #Encode worktype 
        work_govt, work_never, work_private, work_self_employed, work_children = self.encode_worktype(work_type)

        #Encode residence type
        residence_rural, residence_urban = self.encode_residence(residence_type)

        #Encode gender
        gender_female, gender_male, gender_other = self.encode_gender(gender)

        #Encode smoking
        smoking_unknown, smoking_former, smoking_never, smoking_smokes = self.encode_smoking(smoking_status)

        #Store in the dictionary    
        param_dict = {"age" : [std_age], "hypertension": [hypertension], "heart_disease": [heart_disease], "avg_glucose_level" : [std_glucose], "bmi" : [std_bmi],
         "gender_Female": [gender_female],"gender_Male": [gender_male], "gender_Other": [gender_other], 
         "ever_married_No": [married_no],"ever_married_Yes": [married_yes],
         "work_type_Govt_job": [work_govt],"work_type_Never_worked": [work_never],"work_type_Private": [work_private],
         "work_type_Self-employed": [work_self_employed],"work_type_children": [work_children],
         "Residence_type_Rural": [residence_rural], "Residence_type_Urban": [residence_urban],
         "smoking_status_Unknown": [smoking_unknown], "smoking_status_formerly smoked": [smoking_former], "smoking_status_never smoked": [smoking_never], "smoking_status_smokes": [smoking_smokes]
         }

        final_df = pd.DataFrame.from_dict(param_dict)
        
        folder_path = os.getcwd()
        loaded_model = pickle.load(open(folder_path+'/stroke_prediction/dt_model.sav','rb'))
        pred_result = loaded_model.predict(final_df)

        importance = list(loaded_model.feature_importances_)

        rounded_importance = [round(i,2) for i in importance]

        feature_importances = {
            'age': rounded_importance[0], 
            'hypertension': rounded_importance[1], 
            'heart_disease': rounded_importance[2], 
            'avg_glucose_level': rounded_importance[3], 
            'bmi': rounded_importance[4],
            'gender': rounded_importance[5] + rounded_importance[6] + rounded_importance[7], 
            'ever_married': rounded_importance[8] + rounded_importance[9], 
            'work_type': rounded_importance[10] + rounded_importance[11] + rounded_importance[12] + rounded_importance[13] + rounded_importance[14], 
            'residence_type': rounded_importance[15] + rounded_importance[16], 
            'smoking': rounded_importance[17]+ rounded_importance[18] + rounded_importance[19] + rounded_importance[20]
        }

        if pred_result[0] == 0:
            result = "no"
        else:
            result = "yes"

        return Response({"result":result, "feature_importance":feature_importances}, status = status.HTTP_200_OK)


class AgeStrokeView(APIView):

    permission_classes = [AllowAny]
    authentication_classes = []

    def standardise(self, value):

        env = environ.Env()
        environ.Env.read_env()

        min_age = float(env('MIN_AGE'))
        max_age = float(env('MAX_AGE'))

        std_age = (value - min_age) / (max_age - min_age)
        return std_age

    def get(self, request):
        age = request.GET['age']

        std_age = self.standardise(float(age))
        params = {"id" : [232], "age" : [std_age]}

        age_df = pd.DataFrame.from_dict(params)

        folder_path = os.getcwd()
        loaded_model = pickle.load(open(folder_path+'/stroke_prediction/nb_model.sav','rb'))

        probability = loaded_model.predict_proba(age_df)
        list_probs = list(probability[0])

        rounded_probs = [round(i,3) * 100 for i in list_probs]

        result = {"No": rounded_probs[0], "Yes": rounded_probs[1]}
        return Response({"result": result})


class BmiStrokeView(APIView):

    permission_classes = [AllowAny]
    authentication_classes = []

    def standardise(self, value):

        env = environ.Env()
        environ.Env.read_env()

        min_bmi = float(env('MIN_BMI'))
        max_bmi = float(env('MAX_BMI'))

        std_bmi = (value - min_bmi) / (max_bmi - min_bmi)
        return std_bmi

    def get(self, request):
        bmi = request.GET['bmi']

        std_bmi = self.standardise(float(bmi))
        params = {"id" : [232], "bmi" : [std_bmi]}

        bmi_df = pd.DataFrame.from_dict(params)

        folder_path = os.getcwd()
        loaded_model = pickle.load(open(folder_path+'/stroke_prediction/nb_model_bmi.sav','rb'))

        probability = loaded_model.predict_proba(bmi_df)
        list_probs = list(probability[0])

        rounded_probs = [round(i,3) * 100 for i in list_probs]

        result = {"No": rounded_probs[0], "Yes": rounded_probs[1]}
        return Response({"result": result})


class AvgGlucosePredictView(APIView):

    permission_classes = [AllowAny]
    authentication_classes = []

    def standardise(self, value):

        env = environ.Env()
        environ.Env.read_env()

        min_glucose = float(env('MIN_GLUCOSE'))
        max_glucose = float(env('MAX_GLUCOSE'))

        std_glucose = (value - min_glucose) / (max_glucose - min_glucose)
        return std_glucose

    def get(self, request):
        glucose = request.GET['glucose']

        std_glucose = self.standardise(float(glucose))
        params = {"id" : [232], "avg_glucose_level" : [std_glucose]}

        glucose_df = pd.DataFrame.from_dict(params)

        folder_path = os.getcwd()
        loaded_model = pickle.load(open(folder_path + '/stroke_prediction/nb_model_glucose.sav','rb'))

        probability = loaded_model.predict_proba(glucose_df)
        list_probs = list(probability[0])

        rounded_probs = [round(i,3) * 100 for i in list_probs]

        result = {"No": rounded_probs[0], "Yes": rounded_probs[1]}
        return Response({"result": result})


class StaticGraphsView(APIView):

    permission_classes = [AllowAny]
    authentication_classes = []

    def CountFrequency(self, my_list):   
        # Creating an empty dictionary
        freq = {}
        for items in my_list:
            freq[items] = my_list.count(items)
        return freq

    def get(self, request):
        folder_path = os.getcwd()
        stroke_yes = pd.read_csv(folder_path+"/stroke_prediction/only_strokes.csv")

        age_bins = list(pd.qcut(stroke_yes['age'], q=[0, .1, .2, .4, .8, 1], labels=["14-50","51-56","57-68","69-79","80-82"]))
        freq_ages = self.CountFrequency(age_bins)

        bmi_bins = list(pd.qcut(stroke_yes['bmi'], q=[0, .1, .2, .4, .8, 1], labels=["16.89-23.46","23.46-25.6","25.6-28.04","28.04-34.58","34.58-47.5"]))
        freq_bmi = self.CountFrequency(bmi_bins)

        glucose_bins = list(pd.qcut(stroke_yes['avg_glucose_level'], q=[0, .1, .2, .4, .8, 1], labels=["56.109-70.204","70.204-76.482","76.482-95.968","95.968-205.686","205.686-271.74"]))
        freq_glucose = self.CountFrequency(glucose_bins)

        return Response({"age_bins": freq_ages, "bmi_bins": freq_bmi, "glucose_bins": freq_glucose})