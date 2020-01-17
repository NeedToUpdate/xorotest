
function array_intersect(a, b) {
    return a.filter((item) => b.indexOf(item) !== -1)
}

let pkmns = 'Bulbasaur:1|Ivysaur:2|Venusaur:3|Charmander:4|Charmeleon:5|Charizard:6|Squirtle:7|Wartortle:8|Blastoise:9|Caterpie:10|Metapod:11|Butterfree:12|Pikachu:25|Pikachu .1:25.1|Pikachu .2:25.2|Pikachu .3:25.3|Pikachu .4:25.4|Pikachu .5:25.5|Pikachu .6:25.6|Pikachu .7:25.7|Raichu:26|Raichu .1:26.1|Clefairy:35|Clefable:36|Vulpix:37|Vulpix .1:37.1|Ninetales:38|Ninetales .1:38.1|Oddish:43|Gloom:44|Vileplume:45|Diglett:50|Diglett .1:50.1|Dugtrio:51|Dugtrio .1:51.1|Meowth:52|Meowth .1:52.1|Meowth .2:52.2|Persian:53|Persian .1:53.1|Growlithe:58|Arcanine:59|Machop:66|Machoke:67|Machamp:68|Ponyta:77|Ponyta .1:77.1|Rapidash:78|Rapidash .1:78.1|Farfetch’d:83|Farfetch’d .1:83.1|Shellder:90|Cloyster:91|Gastly:92|Haunter:93|Gengar:94|Onix:95|Krabby:98|Kingler:99|Hitmonlee:106|Hitmonchan:107|Koffing:109|Weezing:110|Weezing .1:110.1|Rhyhorn:111|Rhydon:112|Goldeen:118|Seaking:119|Mr. Mime:122|Mr. Mime .1:122.1|Magikarp:129|Gyarados:130|Lapras:131|Ditto:132|Eevee:133|Vaporeon:134|Jolteon:135|Flareon:136|Snorlax:143|Mewtwo:150|Mew:151|Hoothoot:163|Noctowl:164|Chinchou:170|Lanturn:171|Pichu:172|Cleffa:173|Togepi:175|Togetic:176|Natu:177|Xatu:178|Bellossom:182|Sudowoodo:185|Wooper:194|Quagsire:195|Espeon:196|Umbreon:197|Wobbuffet:202|Steelix:208|Qwilfish:211|Shuckle:213|Sneasel:215|Swinub:220|Piloswine:221|Corsola:222|Corsola .1:222.1|Remoraid:223|Octillery:224|Delibird:225|Mantine:226|Tyrogue:236|Hitmontop:237|Larvitar:246|Pupitar:247|Tyranitar:248|Celebi:251|Zigzagoon:263|Zigzagoon .1:263.1|Linoone:264|Linoone .1:264.1|Lotad:270|Lombre:271|Ludicolo:272|Seedot:273|Nuzleaf:274|Shiftry:275|Wingull:278|Pelipper:279|Ralts:280|Kirlia:281|Gardevoir:282|Nincada:290|Ninjask:291|Shedinja:292|Sableye:302|Mawile:303|Electrike:309|Manectric:310|Roselia:315|Wailmer:320|Wailord:321|Torkoal:324|Trapinch:328|Vibrava:329|Flygon:330|Lunatone:337|Solrock:338|Barboach:339|Whiscash:340|Corphish:341|Crawdaunt:342|Baltoy:343|Claydol:344|Feebas:349|Milotic:350|Duskull:355|Dusclops:356|Wynaut:360|Snorunt:361|Glalie:362|Jirachi:385|Budew:406|Roserade:407|Combee:415|Vespiquen:416|Cherubi:420|Cherrim:421|Cherrim .1:421.1|Shellos:422|Shellos .1:422.1|Gastrodon:423|Gastrodon .1:423.2|Drifloon:425|Drifblim:426|Stunky:434|Skuntank:435|Bronzor:436|Bronzong:437|Bonsly:438|Mime Jr.:439|Munchlax:446|Riolu:447|Lucario:448|Hippopotas:449|Hippowdon:450|Skorupi:451|Drapion:452|Croagunk:453|Toxicroak:454|Mantyke:458|Snover:459|Abomasnow:460|Weavile:461|Rhyperior:464|Togekiss:468|Leafeon:470|Glaceon:471|Mamoswine:473|Gallade:475|Dusknoir:477|Froslass:478|Rotom:479|Rotom .1:479.1|Rotom .2:479.2|Rotom .3:479.3|Rotom .4:479.4|Rotom .5:479.5|Purrloin:509|Liepard:510|Munna:517|Musharna:518|Pidove:519|Tranquill:520|Unfezant:521|Roggenrola:524|Boldore:525|Gigalith:526|Woobat:527|Swoobat:528|Drilbur:529|Excadrill:530|Timburr:532|Gurdurr:533|Conkeldurr:534|Tympole:535|Palpitoad:536|Seismitoad:537|Throh:538|Sawk:539|Cottonee:546|Whimsicott:547|Basculin:550|Basculin .1:550.1|Darumaka:554|Darumaka 1:993|Darmanitan:555|Darmanitan .1:555.1|Darmanitan .2:555.2|Darmanitan .3:555.3|Maractus:556|Dwebble:557|Crustle:558|Scraggy:559|Scrafty:560|Sigilyph:561|Yamask:562|Yamask .1:562.1|Cofagrigus:563|Trubbish:568|Garbodor:569|Minccino:572|Cinccino:573|Gothita:574|Gothorita:575|Gothitelle:576|Solosis:577|Duosion:578|Reuniclus:579|Vanillite:582|Vanillish:583|Vanilluxe:584|Karrablast:588|Escavalier:589|Frillish:592|Jellicent:593|Joltik:595|Galvantula:596|Ferroseed:597|Ferrothorn:598|Klink:599|Klang:600|Klinklang:601|Elgyem:605|Beheeyem:606|Litwick:607|Lampent:608|Chandelure:609|Axew:610|Fraxure:611|Haxorus:612|Cubchoo:613|Beartic:614|Shelmet:616|Accelgor:617|Stunfisk:618|Stunfisk .1:618.1|Golett:622|Golurk:623|Pawniard:624|Bisharp:625|Rufflet:627|Braviary:628|Vullaby:629|Mandibuzz:630|Heatmor:631|Durant:632|Deino:633|Zweilous:634|Hydreigon:635|Cobalion:638|Terrakion:639|Virizion:640|Reshiram:643|Zekrom:644|Kyurem:646|Kyurem .1:646.1|Kyurem .2:646.2|Keldeo:647|Keldeo .1:647.1|Bunnelby:659|Diggersby:660|Pancham:674|Pangoro:675|Espurr:677|Meowstic:678|Meowstic .1:678.1|Honedge:679|Doublade:680|Aegislash:681|Aegislash .1:681.1|Spritzee:682|Aromatisse:683|Swirlix:684|Slurpuff:685|Inkay:686|Malamar:687|Binacle:688|Barbaracle:689|Helioptile:694|Heliolisk:695|Sylveon:700|Hawlucha:701|Goomy:704|Sliggoo:705|Goodra:706|Phantump:708|Trevenant:709|Pumpkaboo:710|Pumpkaboo .1:710.1|Pumpkaboo .2:710.2|Pumpkaboo .3:710.3|Gourgeist:711|Gourgeist .1:711.1|Gourgeist .2:711.2|Gourgeist .3:711.3|Bergmite:712|Avalugg:713|Noibat:714|Noivern:715|Rowlet:722|Dartrix:723|Decidueye:724|Litten:725|Torracat:726|Incineroar:727|Popplio:728|Brionne:729|Primarina:730|Grubbin:736|Charjabug:737|Vikavolt:738|Cutiefly:742|Ribombee:743|Wishiwashi:746|Wishiwashi .1:746.1|Mareanie:747|Toxapex:748|Mudbray:749|Mudsdale:750|Dewpider:751|Araquanid:752|Morelull:755|Shiinotic:756|Salandit:757|Salazzle:758|Stufful:759|Bewear:760|Bounsweet:761|Steenee:762|Tsareena:763|Oranguru:765|Passimian:766|Wimpod:767|Golisopod:768|Pyukumuku:771|Type： Null:772|Silvally:773|Silvally .1:773.1|Silvally .2:773.2|Silvally .3:773.3|Silvally .4:773.4|Silvally .5:773.5|Silvally .6:773.6|Silvally .7:773.7|Silvally .8:773.8|Silvally .9:773.9|Silvally .10:773.10|Silvally .11:773.11|Silvally .12:773.12|Silvally .13:773.13|Silvally .14:773.14|Silvally .15:773.15|Silvally .16:773.16|Silvally .17:773.17|Turtonator:776|Togedemaru:777|Mimikyu:778|Mimikyu .1:778.1|Drampa:780|Dhelmise:781|Jangmo-o:782|Hakamo-o:783|Kommo-o:784|Cosmog:789|Cosmoem:790|Solgaleo:791|Lunala:792|Necrozma:800|Necrozma .1:800.1|Necrozma .2:800.2|Marshadow:802|Zeraora:807|Meltan:808|Melmetal:809|Grookey:810|Thwackey:811|Rillaboom:812|Scorbunny:813|Raboot:814|Cinderace:815|Sobble:816|Drizzile:817|Inteleon:818|Skwovet:819|Greedent:820|Rookidee:821|Corvisquire:822|Corviknight:823|Blipbug:824|Dottler:825|Orbeetle:826|Nickit:827|Thievul:828|Gossifleur:829|Eldegoss:830|Wooloo:831|Dubwool:832|Chewtle:833|Drednaw:834|Yamper:835|Boltund:836|Rolycoly:837|Carkol:838|Coalossal:839|Applin:840|Flapple:841|Appletun:842|Silicobra:843|Sandaconda:844|Cramorant:845|Cramorant .1:845.1|Cramorant .2:845.2|Arrokuda:846|Barraskewda:847|Toxel:848|Toxtricity:849|Toxtricity 1:1154|Sizzlipede:850|Centiskorch:851|Clobbopus:852|Grapploct:853|Sinistea:854|Sinistea .1:854.1|Polteageist:855|Polteageist .1:855.1|Hatenna:856|Hattrem:857|Hatterene:858|Impidimp:859|Morgrem:860|Grimmsnarl:861|Obstagoon:862|Perrserker:863|Cursola:864|Sirfetch’d:865|Mr. Rime:866|Runerigus:867|Milcery:868|Alcremie:869|Alcremie .1:869.1|Alcremie .2:869.2|Alcremie .3:869.3|Alcremie .4:869.4|Alcremie .5:869.5|Alcremie .6:869.6|Alcremie .7:869.7|Alcremie .8:869.8|Falinks:870|Pincurchin:871|Snom:872|Frosmoth:873|Stonjourner:874|Eiscue:875|Eiscue .1:875.1|Indeedee:876|Indeedee .1:876.1|Morpeko:877|Morpeko .1:877.1|Cufant:878|Copperajah:879|Dracozolt:880|Arctozolt:881|Dracovish:882|Arctovish:883|Duraludon:884|Dreepy:885|Drakloak:886|Dragapult:887|Zacian:888|Zacian .1:888.1|Zamazenta:889|Zamazenta .1:889.1|Eternatus:890|Eternatus .1:890.1';
let forms_after = 890;
let forms = {
    25.1: 893,
    25.2: 894,
    25.3: 895,
    25.4: 896,
    25.5: 897,
    25.6: 898,
    25.7: 899,
    26.1: 900,
    37.1: 903,
    38.1: 904,
    50.1: 905,
    51.1: 906,
    52.1: 907,
    52.2: 908,
    53.1: 909,
    77.1: 913,
    78.1: 914,
    83.1: 915,
    110.1: 920,
    122.1: 921,
    222.1: 949,
    263.1: 950,
    264.1: 951,
    421.1: 965,
    422.1: 966,
    423.2: 967,
    479.1: 968,
    479.2: 969,
    479.3: 970,
    479.4: 971,
    479.5: 972,
    550.1: 992,
    555.1: 994,
    555.2: 995,
    555.3: 996,
    562.1: 997,
    618.1: 1004,
    646.1: 1008,
    646.2: 1009,
    647.1: 1010,
    678.1: 1097,
    681.1: 1098,
    710.1: 1099,
    710.2: 1100,
    710.3: 1101,
    711.1: 1102,
    711.2: 1103,
    711.3: 1104,
    746.1: 1117,
    773.1: 1118,
    773.2: 1119,
    773.3: 1120,
    773.4: 1121,
    773.5: 1122,
    773.6: 1123,
    773.7: 1124,
    773.8: 1125,
    773.9: 1126,
    773.10: 1127,
    773.11: 1128,
    773.12: 1129,
    773.13: 1130,
    773.14: 1131,
    773.15: 1132,
    773.16: 1133,
    773.17: 1134,
    778.1: 1148,
    800.1: 1149,
    800.2: 1150,
    845.1: 1152,
    845.2: 1153,
    854.1: 1155,
    855.1: 1156,
    869.1: 1157,
    869.2: 1158,
    869.3: 1159,
    869.4: 1160,
    869.5: 1161,
    869.6: 1162,
    869.7: 1163,
    869.8: 1164,
    875.1: 1165,
    876.1: 1166,
    877.1: 1167,
    888.1: 1168,
    889.1: 1169,
    890.1: 1170
};
let characteristics = [
    ["5.1", 'alert to sounds'],
    ['2.1', 'capable of taking hits'],
    ['1.1', 'likes to thrash about'],
    ['3.1', 'mischevious'],
    ['4.1', 'somewhat vain'],
    ['0.1', 'takes plenty of siestas']
]
let natures = [
    [1, 1, 1, 1, 1],
    [1.1, 0.9, 1, 1, 1],
    [1.1, 1, 1, 1, 0.9],
    [1.1, 1, 0.9, 1, 1],
    [1.1, 1, 1, 0.9, 1],
    [0.9, 1.1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1.1, 1, 1, 0.9],
    [1, 1.1, 0.9, 1, 1],
    [1, 1.1, 1, 0.9, 1], //lax
    [0.9, 1, 1, 1, 1.1],
    [1, 0.9, 1, 1, 1.1],
    [1, 1, 1, 1, 1],
    [1, 1, 0.9, 1, 1.1],
    [1, 1, 1, 0.9, 1.1], //naive
    [0.9, 1, 1.1, 1, 1],
    [1, 0.9, 1.1, 1, 1],
    [1, 1, 1.1, 1, 0.9],
    [1, 1, 1, 1, 1],
    [1, 1, 1.1, 0.9, 1], //rash
    [0.9, 1, 1, 1.1, 1],
    [1, 0.9, 1, 1.1, 1],
    [1, 1, 1, 1.1, 0.9],
    [1, 1, 0.9, 1.1, 1],
    [1, 1, 1, 1, 1]];
natures[-1] = [0, 0, 0, 0, 0]; //error
natures['max'] = [1.1, 1.1, 1.1, 1.1, 1.1]; //all max
natures['min'] = [0.9, 0.9, 0.9, 0.9, 0.9]; //all max

let nature_dict = [
    "Hardy",
    "Lonely",
    "Brave",
    "Adamant",
    "Naughty",
    "Bold",
    "Docile",
    "Relaxed",
    "Impish",
    "Lax",
    "Timid",
    "Hasty",
    "Serious",
    "Jolly",
    "Naive",
    "Modest",
    "Mild",
    "Quiet",
    "Bashful",
    "Rash",
    "Calm",
    "Gentle",
    "Sassy",
    "Careful",
    "Quirky",
];


let ivr = Array(32).fill('').map((x, i) => i);

let statnames = ['HP', 'Attack', 'Defense', 'Sp.Attack', 'Sp.Defense', 'Speed', '&mdash;'];
let maxiv = 31;
let miniv = [-1, 0];
let compressed_stats = "000000000000000000045049049065065045060062063080080060080082083100100080039052043060050065058064058080065080078084078109085100044048065050064043059063080065080058079083100085105078045030035020020045050020055025025030060045050090080070040035030020020050045025050025025035065090040045080075040045040035035056063060055050050071083080075070070101030056035025035072055081060050070097040060030031031070065090065061061100035060044040054055060095069065079080035055040050050090060090055090080110050075085020030040075100110045055065055047052040040041070062067055055056090092087075085076046057040040040050061072057055055065081102077085075085070045048060065035095070073095090060038041040050065065073076075081100100115045020045025020140070045085050045040045035030040055075080070065075090045050055075065030060065070085075040075080085110090050035070055045055025060095080060080030060055050040055045070065060090075090010055025035045095035100050050070120040045035040040090065070060065065115050052048065050055080082078095080085040080035035045070065105060060070095055070045070050060090110080100080095040050040040040090065065065050050090090095095070090070025020015105055090040035030120070105055050045135095120070080050035035035080100070050060045090130080065085055050075035070030040065090050085045055080105065100070070040040035050100070080070065080120100040080100030030020055095115045045035080120130055065045050085055065065090065100070080080105090065065040040015095075110100080030025035070095055045050060095120070070052090055058062060035085045035035075060110070060060110065045055045070045090070080070095070080080050040050025105105075065100050030065100045025040050095180085045070030035030100035080045050045115055095060065060130075110035045160030045070060048045043090042085073070073115067030105090025025050055130115050050075040030050055055100060050070080080150060040080060045040095095085125075055050050095040050035060080110050080045050120053035110087050105079035110076090055075060075030040065095060045035065090120085070060080085095030030025105130120045045040250005005035105050065055115100040060105095080040080090030040070070025060055065095095045085045067060035050063080092065065080068030045055070055085060075085100085115040045065100120090070110080055080105065050035115095095065083057095085105065095057100085093065125100055070085075100095040070110020010055015020080095125079060100081130085080085095060048048048048048048055055050045065055130065060110095065065065060110095130065130060095110065065060070085075040035040100090055035070060125115070055030080090055045055060115105065070080080105065060075130160110065065110030090085100095125085090090085125090100090100090125085090041064045050050050061084065070070070091134095100100080106110090154090130100100100100100100045049065049065045060062080063080060080082100083100080039052043060050065058064058080065080078084078109085100050065064044048043065080080059063058085105100079083078035046034035045020085076064045055090060030030036056050100050050086096070040020030040080055055035050055110085040060040040040030070090070060070040085090080070080130075038038056056067125058058076076067020040015035035060050025028045055015090030015040020015035020065040065020055040085080105040040050045070045070065075070095070095055040040065045035070055055080060045090075085115090055075080095090100050070020050020050040100050080060080050070100115030065030090075075090100070035035040035055050055045050045065080075055070055095110055070055040055085030030030030030030075075055105085030065065045075045095055045045025025015095085085065065035065065060130095110095065110060130065060085042085042091095075080100110030060060060085085085048072048072048048190033058033058033070080065090065085050065090035035015075090140060060040100070070065065045065075105035065085075085200055065030060080050040040030090120075060060045065095085055055085070130100055080065020010230010230005080125075040095085055095055035075115060080050050050040090130075075075055040040040070040020060050120090080030050050040030030050100100080060060050065055095065095035035065035065035065075105075105075045045055045065045075085040070080140070065080140040070070045060030080050065075090050110080095075095095095095085090060060040040040090120120060060050085080090105095060073095062085065085055020035020045075035035035035035035050095095035110070045030015085065065045063037065055095045075037070055083095080105040070100255010010075135055090085075115100115115115085090075100100075115090115085050064050045050041070084070065070051100134110095100061106090130090154110106130090110154090100100100100100100040045035065055070050065045085065095070085065105085120045060040070050045060085060085060055080120070110070080050070050050050040070085070060070050100110090085090060035055035030030035070090070060060070038030041030041060078070061050061100045045035020030020050035055025025015060070050100050065050035055025025015060050070050090065040030030040050030060050050060070050080070070090100070040040050030030030070070040060040060090100060090060080040055030030030085060085060075050125040030030055030085060050100095070065028025025045035040038035035065055050068065065125115080040030032050052065070060062100082080060040060040060035060130080060060070060060060035035030080080080055055090150160100095065100031045090030030040061090045050050160001090045030030040064051023051023028084071043071043048104091063091073068072060030020030025144120060040060050050020040020040020030045135045090030050045045035035050070065065055055090050075075065065050050085085055055050050070100040040030060090140050050040070110180060060050030040055040055060060060075060075080040045040065040065070075060105060105060050040085075095060040050075085095065073075047085085065047075073085085050060045100080065070043053043053040100073083073083055045090020065020065070120040095040095130070035070035060170090045090045060060060040065045035070100070105075040070085140085070020060025035070080060080045065090110080060060060060060060045100045045045010050070050050050070080100080080080100050085040085040035070115060115060055045040060040075050075070090070105080073115060060060090073100060100060065090055065095085070090095085055065070050048043046041060110078073076071060043080065050035035063120085090055055040040055040070055060070105070120075066041077061087023086081097081107043045095050040050075075125100070080045020015020010055080095060079100125081070070070070070070060090070060120040044075035063033045064115065083063065020040090030090025040070130060130025099068083072087051075050080095090065065130060075060075095023048023048023050050050050050050080080080080080080070040050055050025090060070075070045110080090095090065035064085074055032055104105094075052055084105114075052100090130045065055043030055040065097045075060040030050065095100060050050095135080110080100040055080035060030060075100055080050080135130095090070080100200050100050080050100100200050080075150075150050080080090110130110080090080130110110100100090150140090100150140100090090105150090150090095100100100100100100050150050150050150055068064045055031075089085055065036095109105075085056044058044058044061064078052078052081076104071104071108053051053061056040064066068081076050084086088111101060040055030030030060055075050040040080085120070050060100059045040035040031079085060055060071037025041025041025077085051055051065045065034040034045060085049060049060080120079095079070040030035050070055060070065125105090067125040030030058097165060065050058030042118042088030060052168047138030040029045029045036060059085079105036070094050094050066030030042030042070070080102080102040060045070045090095055065035060030085085105055085050115045035045062053035070060070087078085076048048057062034111083068092082039075100066060066115090050034060044070150080044090054080055066044044056085065076084054096105060060060105105105100125052105052071049055042042037085071082064064059112045030050065050045063063047041041074103093067071061084057024086024086023067089116079116033050080095010045010020025045070090060100005005015065030076065045092042091050092108092108035058070045040045042068090065050055082108130095080085102135085040040085005040070040035040060070110070115070090068072078038042032108112118068072047040050090030055065070090110060075095048061040061040050083106065086065085074100072090072046049049056049061066069069076069086091045020050060120050060062050062060040090092075092085060070120065045085125070070115130090060110085095080095050115140130055055040100100125110050050075123067095085095075095067125095083085050095120115080086076086116056095065110130060065095065060110130095065075095125045075095110130080070060080085080070135075090068125065065115080060055145075150040045100135065135045070080070080070110050050077095077091075075130075130095080105105105105080075125070125070115100120120150100090090120100150120100091090106130106077110160110080110100150100120100120090120070120075130085080080080080080080100100100100100100070090090135090125100100100100100100120120120120120120100100100100100100045045055045055063060060075060075083075075095075095113065063045045045045090093055070055055110123065100065065055055045063045045075075060083060060095100085108070070045055039035039042060085069060069077045060045025045055065080065035065060085110090045090080041050037050037066064088050088050106050053048053048064075098063098063101050053048053048064075098063098063101050053048053048064075098063098063101076025045067055024116055085107095029050055050036030043062077062050042065080115080065055093045060032050032076075100063080063116055075085025025015070105105050040020085135130060080025065045043055043072067057055077055114060085040030045068110135060050065088103060086060086050075080055025035035085105085040050040105140095055065045050050040050040064075065055065055069105095075085075074120100085030085045075125075030075085045053070040060042055063090050080042075103080070080092030045059030039057040055099040079047060100089055069112040027060037050066060067085077075116045035050070050030070060075110075090070092065080055098050072035035035065060082045045045074095117080065070092070090045015045050105140055030055095075086067106067060050065085035035055070105125065075045050075070035070048065090115045115058072058080103080097038030085055065030058050145095105030054078103053045022074108133083065032055112045074045070075140065112065110050050062040062065080095082060082075040065040080040065060105060120060105055050040040040075075095060065060115045030050055065045060045070075085055070055095095110065045030040105050020065040050125060030110065075125085030062044050044050055075087063087063098036050050065060044051065065080075059071095085110095079060060050040050075080100070060070095055075060075060103050075045040045060070135105060105020069055045055055015114085070085080030055040050065085040100060070085105060165075080040045065050047050057050065070077060097060108044050091024086010074094131054116020040055070045060030060080095070085050060100115070085090035055040045040060065085070075070040085115080105080050055055055085055030075075075125095040050030055065055020060040060095060055060055090145090080046087060030040057066117070040050067076147090060070097055070040060040040095130080070080050080050050095135105050040085040065025080070040100060145109066084081099032045085050055050065065125060095060105077120090060090048059074050035050035089124080055080055045085070040040060065125100060070070095110095040095055070083050037050060100123075057075080070055075045065060110065105055095080085097066105066065058109112048048109052065050045050038072085070065070058092105090125090098055085055050055060085060065135105100091090129090072108091129090072090108091090072090129108079115070125080111079115070125080111100120100150120090100150120120100090089125090115080101125130090130090095091072090129090108100077077128128090071120095120095099056061065048045038061078095056058057088107122074075064040045040062060060059059058090070073075069072114100104041056040062044071054063052083056097072095067103071122038036038032036057085056077050077078045050043040038062062073055056052084078081071074069126038035040027025035045022060027030029080052050090050089062050058073054072086068072109066106044038039061079042054045047075098052078065068112154075066065048062057052123100062097081068067082062046048043095124078069071058075080060065090102062048054063060068074048076083081104045080100035037028059110150045049035060050140050140060078052060063065023101072072099089029062048066059057049082080086085075072053054053037046045086092088068075073042052067039056050072105115054086068050060060060060030065075090097123044050053062058063044071073088120089059044038033061043070062055052109094109058089077045045048082121119069059071077059050067063046123077072099092058095065065110130060078092075074063118067058057081067101050050150050150050045050035055075040068075053083113060090100070110150080057080091080087075043070048050060038085110076065082056049066070044055051065090122058075084055069085032035028095117184044046028040030035045040055085070080097080123126131095131098099126131095131098099108100121081095095050100150100150050080110060150130070080110120130090070068055055050050042078075075070070052078107075100100070045065040060040070065085050080050090095115090080090060050054054066056040060069069091081050080074074126116060035075030030030065055085050040050075080120075075075060048070030030030045088110060055060045047062045055045046057082095055075036077070090145075043047082057042047063097132077062067043075070070098070093040045040055040084060055060095070124045065040030040060075115065055065112045020020025025040050053062043052045050063152053142035070100070045055045100125100055085035038040052040072027068070092050132042040055035050035035070105090080090045040035055065075015060045080090100030048044040071040077068064060111060117070075050045050050120125080055060060042030038030038032052040048040048062072120098050098072051052090082110100090060080090110060100120090040060080025035040020030080075125140060090040055055080070045015085075110100075035055060130030130005095095095095095059095095095095095095060060100060100060065115065075095065060078135091085036065098063040073096055090080050105096068105070070070092078060085135091036070131100086090040045055065045045045055075090065070065075110125100105085070115085095075130070085075130115095070130115085095075070075115095130085043029031029031037043029131029131037137137107113089097137113089137107097109053047127131103107139139053053079071137037137037151083089071173071083097101103107101061059181131059031109223101053097053043097107101127089079080095115130115065090125080090090125067073067073067073073073073127073121061131211053101013053127053151079107088112075102080143046065065055035034135143143080065034050065050040040065070085070055060080100125090060070085050071040040040069065086060055060094080116075065075119050040040070040070065060055095055090070085065125065120070055055035035025120095095055075020038047035033035057068067055043055077098087105053085067025020020025045045050035080050090030060045110080120090040028028047052050070058058087092090040040060040060010060050090080120060042040055040045048072080100060090088050064050038038044090115090048068074059045050040050026069090060090060121030040050040050030080060090060070050110080120080090030040040080040040020070110080095060070110085080100080030052057075035050046072107125065070071070085055085095085041063040040030066061123060060050136040038035054035040075098070114070075050065045050050045100115065090090065050068060050050032080118090070080042040045045074054050060065065134114070042030045056053039057040065086073049057090095136103029045045030055040050065060045075055070095120065095075060093090101060081095070110100050060050060095050145130030062135095068082065080085075110100070058095145050105030045040040050061034065060075110121064065100100070060075048101095091085015030025035045030020070065060125090065100125135020020070075080110065090050060065055105095095058095058070058097072080049040049040122130069080069030090100090080070075090100090090080055090090100070080075090090100080090055070095115120050085028060030040030082068080050060050102088120075100075142092130115080115138092130115080115138140085095145095130080160060170130080030056035025035072035055040050050090035055040050050090035055040050050090035055040050050090035055040050050090035055040050050090035055040050050090060085050095085110040035035050040090065060060075065115038041040050065065073067075081100109010055030035045090035100060050070110040035035050040090050065055040040040065060060075065115072145067153080132054100071061085115216100121091095085050085055065065090065100070080080105052095055058062055085115075055075082045140130140135030060100060100060120075117065055065110065090120085070060050065065090090100097167097167097129000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060055100065100030038030041030041060078070061050061100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070060070087078085076048048057062034111083068092082039050065107105107086050065107105107086050065107105107086050065107105107086050065107105107086000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070092065080055098070090045015045050105030105140105055105140055030055095105160055030055135038055085030065030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000109081099066084032000000000000000000000000000000000000000000000000000000125120090170100095125170100120090095091072090129090108000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000074048076083081104060140050140050060044066070044055056054066070044055046059066070044055041055085122058075099075095122058075069085100122058075054000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045140130140135030095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095095000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055090080050105096097157127113109077097113109157127077000000000000000000070085055085095085070085055085095085075098070114070075040045045074054050060065065134114070065060075110121064065060075110121064065060075110121064065060075110121064065060075110121064065060075110121064065060075110121064065060075110121064075080070065050130070055065095105085058095058070058097092170115080115148092130145080145128255115250125250130"

function get_form(p) {
    p = '' + p;
    if (p.indexOf('.') > -1) {
        p = forms[p];
    }
    return p
}

function get_form_stats(formnum) {
    let num = (formnum) * 6 * 3;
    let stats_string = compressed_stats.slice(num, num + 6 * 3);
    let stats = [];
    for (let i = 0; i < 6; i++) {
        stats.push(parseInt(stats_string.slice(i * 3, (i + 1) * 3)))
    }
    return stats
}


let name2dex = {};

function populaten2d() {
    pkmns = pkmns.split('|'); //Sort names alphabetically
    pkmns.forEach(nameval => {
        let val = nameval.split(":");
        let name = val[0];
        name2dex[name] = val[1]
    });
}

populaten2d();


function get_stats(name) {
    let num = name2dex[name];
    let datanum = get_form(num);
    let stats = get_form_stats(datanum);
    return stats
}


function calc_stat(species, pstat, stativ, statev = 0, pokelvl, nature) { //Calculates Pokemon stats
    let basestat = get_form_stats(species)[pstat];
    let bonus = natures[nature][(pstat - 1)];
    statev = 0;
    let result;
    if (pstat === 0) { //HP uses a different formula
        result = (Math.floor(((basestat * 2 + (stativ / 1) + Math.floor(statev / 4)) * pokelvl) / 100)) + (pokelvl / 1) + 10;
        if (species === 292) {
            return 1;
        } //Shedinja Case
    }
    else {
        result = Math.floor((Math.floor(((basestat * 2 + (stativ / 1) + Math.floor(statev / 4)) * pokelvl) / 100) + 5) * bonus);
    }
    return result;
}

let ivs = [ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice()];

function calc_stativ(species, pstat, stat, statev, pokelvl, nature, chara) {
    chara = chara.split('.');
    let charas = [[0, 5, 10, 15, 20, 25, 30], [1, 6, 11, 16, 21, 26, 31], [2, 7, 12, 17, 22, 27], [3, 8, 13, 18, 23, 28], [4, 9, 14, 19, 24, 29]];
    ivs[pstat] = [-1];
    for(let i = 31; i>=0; i--){
        if (calc_stat(species, pstat, i, statev, pokelvl, nature) === stat) {
            ivs[pstat].unshift(i);
        }
    }
    if (pstat === 0 && species === 292) {
        ivs[pstat] = ivr.slice();
    } //Shedinja Case

    if (chara[0] === pstat && chara !== -1) {
        ivs[pstat] = array_intersect(ivs[pstat], charas[chara[1]]);
        maxiv = ivs[pstat][ivs[pstat].length - 1]; //global maximum IV
    }

    if (ivs[pstat][0] > miniv[1]) {
        miniv[1] = ivs[pstat][0];
    }
    return ivs[pstat];
}

function calc_ivs(species, lvl, stats, nature, chara) { //Calculates a complete IV set
    let error = 0; //global- reset errors
    if (species === 0) {
        error = 'no pokemon selected';
        return false;
    }
    if (lvl === 0) {
        error = 'level not defined';
        return false;
    }

    function validate_iv(result, species, pstat, stat, statev, pokelvl, nature) { // IV error handling
        let spname = species;
        let dexnum = name2dex[species];
        let max = calc_stat(dexnum, pstat, 31, statev, pokelvl, nature);
        let min = calc_stat(dexnum, pstat, 0, statev, pokelvl, nature);
        if (stat > max || stat < min) {
            alert(spname + ' at lvl ' + pokelvl + ' should have a ' + statnames[pstat] + '(' + stat + ') of ' + min + ' to ' + max + '.');
            ivs[pstat] = [-1];
            return ['error'];
        }
        for (let i = 0; i < result.length; i++) {
            if (result[i] > maxiv) { //beyond characteristic upper bound
                result = result.slice(0, i);
            }
            if (miniv[0] === pstat && result[i] >= miniv[1]) { //best iv must remain be at least equal to the lower bound
                result = result.slice(i);
            }
        }
        if (result.length === 0 || result[0] > maxiv || result[0] === -1 || result[result.length] > 31) { //out of any bounds
            alert('Something is wrong with ' + spname + '\'s ' + statnames[pstat] + ' stat.');
            ivs[pstat] = [-1];
            return ['error'];
        }
        return result;
    }
    maxiv = 31;
    miniv = [-1, 0];//global- maximum IV
    ivs = [ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice(), ivr.slice()];
    //Calculate row(s)
    for (let j = 5; j >= 0; j--) {
        ivs[j] = array_intersect(ivs[j], calc_stativ(name2dex[species], j, stats[j], 0, lvl, nature_dict.indexOf(nature), chara));
    }
    miniv[0] = (chara).split('.')[0];
    //Validate IVs
    for (let i = 5; i >= 0; i--) {
        ivs[i] = validate_iv(ivs[i], species, i, stats[i], 0, lvl, nature_dict.indexOf(nature));
    }
    return ivs
}