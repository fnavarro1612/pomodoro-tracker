from date_counter import views
from django.urls import path


app_name = 'date_counter'

urlpatterns = [
    path('tracker/', views.DateCounterCreateView.as_view(), name='tracker'),
]
