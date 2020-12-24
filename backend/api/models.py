from django.db import models
import random

# Create your models here.

class WordBank(models.Model):
    wb_name = models.CharField(max_length=50, primary_key=True)
    wb_list = models.CharField(max_length=10000) # stored as "10 20 30 40 50 60"

    def json_get(self, rsize):
        wb_list_conv = list( self.wb_list.split(" ")) 
        return "{\"wb_list\": " + str(random.sample(wb_list_conv, k=rsize)).replace('\'', "\"") + "}"
    
class Monster(models.Model):
    m_id = models.PositiveIntegerField(primary_key=True)
    m_name = models.CharField(max_length=50, unique=True)
    m_health = models.PositiveIntegerField()
    m_image = models.URLField(max_length=200)

    def json_get(self):
        return "{\"m_name\": \""+ str(self.m_name) +"\", \"m_health\": " + str(self.m_health) + ", \"m_image\": \"" + str(self.m_image) + "\"} "

### Fixtures ###
## WordBank
# wb_t = WordBank( wb_name='tutorial', wb_list='conspire misuse spiteful neat road idiotic implant muscle tin finger needy arrest chance blue-eyed tie quiver love trip form rookie crossword axe hamlet prototype factory' )
# wb_single = WordBank ( wb_name='singleChar', wb_list= 'a b c d e f g h i j k l m n o p q r s t u v w x y z' )
# wb_c200 = WordBank( wb_name="common200", wb_list='the be of and a to in he have it that for they I with as not on she at by this we you do but from or which one would all will there say who make when can more if no man out other so what time up go about than into could state only new year some take come these know see use get like then first any work now may such give over think most even find day also after way many must look before great back through long where much should well people down own just because good each those feel seem how high too place little world very still nation hand old life tell write become here show house both between need mean call develop under last right move thing general school never same another begin while number part turn real leave might want point form off child few small since against ask late home interest large person end open public follow during present without again hold govern around possible head consider word program problem however lead system seed order eye plan run keep face fact group play stand increase early course change help line' }
# wb_c500 = WordBank( wb_name="common500", wb_list='a about act actually add after again against age ago air all also always am among an and animal another answer appear are area as ask at back ball base be beauty because become bed been before began begin behind best better better between big bird black blue boat body book both bottom box boy bring brought build built busy but by call came can car care carefully carry centre certain change check child children city class clear close cold colour come common community complete contain could country course create cried cross cry cut dark day decide decided deep develop did didn’t different do does dog don’t door down draw dream drive dry during each early earth east easy eat effort enough every example experience explain eye face fact false family far farm fast father feel feet few field find fire first fish five fly follow food form found four friend from front full game gave get girl give go gold good got government great green round group grow guy had half hand happen happened hard has have he hear heat heavy help her here high his hold home horse hot hour house hundred idea if important in inch include into is island it just keep kind king knew know known land language large last late later laugh lead learn leave left less less let letter life light like line list listen little live long look love low machine made make man many map mark may mean measure men might mile million mind minute miss money month moon more more morning most mother mountain move much music must my name nation near need never new next night no north note notice noun now number object of off office often oh oil old on once one only open or order other our out over page pair part pass passed people perhaps person picture place plan plane plant play point power probably problem product provide pull put question quick rain ran reach read ready real receive record red relationship remember right river road rock room round rule run said same saw say school science sea season second see seem self sentence serve set several shape she ship short should show shown side simple since sing sit six size sleep slow small snow so some something song soon sound south space special spell spring stand star start stay step stood stop story street strong study such summer sun system table take talk teach tell ten test than that the their them then there these they thing think this those though thought thousand three through time to together told too took top toward town travel tree try true turn two under understand until up upon us use usual very voice vowel wait walk want war warm was watch water wave way we week weight were west what wheel where which white who why will wind winter with without woman wonder wood word words work world would write wrong year yes you young' )
# wb_t.save()
# wb_single.save()
# wb_c200.save()
# wb_c500.save()

## Monster
# 1 GOLEM: 300
# 2 DARK MAGE: 800
# 3 PALADIN: 400
# 4 NECROMANCER: 500
# 5 SLIME: 50
# 6 HERETIC PRIEST: 200
# 7 VIKING SKIRMISHER: 150
# 8 GOOBBUE: 180