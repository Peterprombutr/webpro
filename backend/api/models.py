from django.db import models
import random

# Create your models here.

class WordBank(models.Model):
    wb_name = models.CharField(max_length=50, primary_key=True)
    wb_list = models.CharField(max_length=10000) # stored as "10 20 30 40 50 60"

    def json_get(self, rsize):
        wb_list_conv = list( self.wb_list.split(" ")) 
        return "{\"wb_list\": " + str(random.choices(wb_list_conv, k=rsize)).replace('\'', "\"") + "}"
    
class Monster(models.Model):
    m_id = models.PositiveIntegerField(primary_key=True)
    m_name = models.CharField(max_length=50, unique=True)
    m_health = models.PositiveIntegerField()
    m_image = models.URLField(max_length=200)

    def json_get(self):
        return "{\"m_name\": \""+ str(self.m_name) +"\", \"m_health\": " + str(self.m_health) + ", \"m_image\": \"" + str(self.m_image) + "\"} "

### Fixtures ###
# WordBank
# wb_t = WordBank( wb_name='Tutorial', wb_list='conspire misuse spiteful neat road idiotic implant muscle tin finger needy arrest chance blue-eyed tie quiver love trip form rookie crossword axe hamlet prototype factory' )
# wb_single = WordBank ( wb_name='SingleChar', wb_list= 'a b c d e f g h i j k l m n o p q r s t u v w x y z' )
# wb_t.save()
# wb_single.save()

# Monster
# m1 = Monster( m_id=1, m_name='Goobbue', m_health=10, m_image='https://cdn.discordapp.com/attachments/716763385009668106/791208297314779146/ffxiv_goobbue.png' )
# m1.save()