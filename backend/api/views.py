from rest_framework import status
from rest_framework.decorators import api_view
from django.http import HttpResponse, Http404
from django.core.exceptions import ObjectDoesNotExist
from .models import WordBank, Monster
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