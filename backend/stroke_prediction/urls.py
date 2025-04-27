from django.urls import path
from .views import StrokeProbability, AgeStrokeView, BmiStrokeView, AvgGlucosePredictView, StaticGraphsView

app_name = 'stroke_prediction'

urlpatterns = [
    path('getStrokeProbabilty/', StrokeProbability.as_view(), name='get_stroke_probability'),
    path('getAgePrediction/', AgeStrokeView.as_view(), name='age_prediction'),
    path('getBmiPrediction/', BmiStrokeView.as_view(), name='bmi_prediction'),
    path('getGlucosePrediction/', AvgGlucosePredictView.as_view(), name='glucose_prediction'),
    path('getStaticGraphs/', StaticGraphsView.as_view(), name='static_graphs'),
]