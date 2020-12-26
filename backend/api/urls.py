from django.urls import path
from .views import (
#    homePageView,
    WordBankRequest,
    MonsterRequest,
    HighScoreRequest,
)

urlpatterns = [
#    path('', homePageView, name='home')
    path('wordbank/', WordBankRequest, name='WordBankRequest'),
    path('monster/', MonsterRequest, name='MonsterRequest'),
    path('highscore/', HighScoreRequest, name='HighScoreRequest'),
]