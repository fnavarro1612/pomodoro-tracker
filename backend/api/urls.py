from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/user/', include('user.urls')),
    path('api/date_counter/', include('date_counter.urls')),
]
