from rest_framework import status
from rest_framework.decorators import api_view
from django.http import HttpResponse, Http404
from django.core.exceptions import ObjectDoesNotExist
from .models import WordBank, Monster, HighScore
from .serializers import HighScoreSerializer
import json

# Create your views here.

# http://servername:port/ api/wordbank/?wb_name=Tutorial&num=20
@api_view(['GET'])
def WordBankRequest(request, wb_name=None, num=None):
    if request.method == 'GET':
        try:
            wb_name = request.GET.get('wb_name')
            if wb_name:
                wb = WordBank.objects.get(wb_name=wb_name)
                rsize = int( request.GET.get('num') )
                wb_n = wb.json_get(rsize)

                return HttpResponse( json.dumps( json.loads(wb_n) ), content_type="application/json")

        except ObjectDoesNotExist:
            raise Http404("No WordBank matches the given query.")


# http://servername:port/ api/monster/?m_id=1
@api_view(['GET'])
def MonsterRequest(request, m_id=None):
    if request.method == 'GET':
        try:
            m_id = int( request.GET.get('m_id') )
            if m_id:
                mons = Monster.objects.get(m_id=m_id)
                mons_n = mons.json_get()

                return HttpResponse( json.dumps( json.loads(mons_n) ), content_type="application/json")

        except ObjectDoesNotExist:
            raise Http404("No WordBank matches the given query.")

  
# http://servername:port/ api/highscore/?p_difficulty=INTERMEDIATE&num=3
@api_view(['GET'])
def HighScoreRequest(request, p_difficulty=None, num=3):
    if request.method == 'GET':
        try:
            res = "[ "
            p_difficulty = request.GET.get('p_difficulty')
            word_no = int(request.GET.get('num'))
            if p_difficulty:
                h_list = HighScore.objects.filter(p_difficulty=p_difficulty)
                h_list_sorted = HighScore.objects.order_by('-p_difficulty', '-p_wpm')[:word_no]
                for pers in h_list_sorted:
                    res+= json.dumps( json.loads( pers.json_get() ) )
                    if pers!=h_list_sorted[min(word_no,len(h_list_sorted))-1]:
                        res+=", "
            res+=" ]"
            return HttpResponse( json.dumps( json.loads(res) ), content_type="application/json")

        except ObjectDoesNotExist:
            raise Http404("No HighScore Level matches the given query.")


# http://servername:port/ api/add/highscore/
@api_view(['PUT'])
def HighScorePost(request, pk):
    try: 
        highscore = HighScore.objects.get(pk=pk) 
    except HighScore.DoesNotExist: 
        Http404("Contact Panpakorn should this happens")
    if request.method == 'PUT':
        highscore_data = JSONParser().parse(request)
        highscore_serializer = HighScoreSerializer(highscore, data=highscore_data)
        if highscore_serializer.is_valid(): 
            highscore_serializer.save()
            return Response(highscore_serializer.data, status=status.HTTP_201_CREATED)
        return Response(highscore_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
