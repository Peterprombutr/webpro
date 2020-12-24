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
# wb_t = WordBank( wb_name='tutorial', wb_list='conspire misuse spiteful neat road idiotic implant muscle tin finger needy arrest chance blue-eyed tie quiver love trip form rookie crossword axe hamlet prototype factory' )
# wb_single = WordBank ( wb_name='singleChar', wb_list= 'a b c d e f g h i j k l m n o p q r s t u v w x y z' )
# wb_real = WordBank( wb_name="common200", wb_list='the be of and a to in he have it that for they I with as not on she at by this we you do but from or which one would all will there say who make when can more if no man out other so what time up go about than into could state only new year some take come these know see use get like then first any work now may such give over think most even find day also after way many must look before great back through long where much should well people down own just because good each those feel seem how high too place little world very still nation hand old life tell write become here show house both between need mean call develop under last right move thing general school never same another begin while number part turn real leave might want point form off child few small since against ask late home interest large person end open public follow during present without again hold govern around possible head consider word program problem however lead system seed order eye plan run keep face fact group play stand increase early course change help line' }
# wb_t.save()
# wb_single.save()
# wb_real.save()

# Monster
# m1 = Monster( m_id=1, m_name='Goobbue', m_health=100, m_image='https://cdn.discordapp.com/attachments/716763385009668106/791208297314779146/ffxiv_goobbue.png' )
# m1.save()