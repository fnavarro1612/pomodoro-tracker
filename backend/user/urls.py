from django.urls import path
from knox.views import LogoutView
from user import views

app_name = 'user'

urlpatterns = [
    path('register/', views.RegisterUserView.as_view(), name='register'),
    path('login/', views.LoginUserView.as_view(), name='login'),
    path('user/', views.UserView.as_view(), name='user'),
    path('logout/', LogoutView.as_view(), name='knox_logout'),
    path('registersuperuser/', views.RegisterSuperUserView.as_view(),
         name='register_super_user'),
]
