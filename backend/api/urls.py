from django.urls import path
from .views import (
#    homePageView,
    WordBankRequest,
    MonsterRequest,
)

urlpatterns = [
#    path('', homePageView, name='home')
    path('wordbank/', WordBankRequest, name='WordBankRequest'),
    path('monster/', MonsterRequest, name='MonsterRequest')
]