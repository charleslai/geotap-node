//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
var addressPoints = [
[-37.8210922667, 175.2209316333,true],
[-37.8210819833, 175.2213903167,true],
[-37.8210881833, 175.2215004833, true],
[-37.8211946833, 175.2213655333,true],
[-37.8209458667, 175.2214051333,true],
[-37.8208292333, 175.2214374833,true],
[-37.8325816, 175.2238798667, true],
[-37.8315855167, 175.2279767, true],
[-37.8096336833, 175.2223743833, true],
[-37.80970685, 175.2221815833, true],
[-37.8102146667, 175.2211562833, true],
[-37.8088037167, 175.2242227, true],
[-37.8112330167, 175.2193425667, true],
[-37.8116368667, 175.2193005167, true],
[-37.80812645, 175.2255449333, true],
[-37.8080231333, 175.2286383167, true],
[-37.8089538667, 175.2222222333, true],
[-37.8080905833, 175.2275400667, true],
[-37.808811, 175.2227592833, true],
[-37.80832975, 175.2276898167, true],
[-37.8089395333, 175.2281710333, true],
[-37.8093421, 175.2274883167, true],
[-37.8084820833, 175.22601925, true],
[-37.80881015, 175.22622865, true],
[-37.8090947667, 175.2263585667, true],
[-37.8092962333, 175.2244872333, true],
[-37.8091016667, 175.2249140167, true],
[-37.8088785167, 175.2253611667, true],
[-37.80825965, 175.22530115, true],
[-37.80995685, 175.2238554333, true],
[-37.80975435, 175.2238417833, true],
[-37.80950755, 175.2237912, true],
[-37.8092772667, 175.2231980833, true],
[-37.8082753833, 175.20672975,true],
[-37.8078434833, 175.211822, true],
[-37.8083775667, 175.2090812333, true],
[-37.8084588, 175.2058838167, true],
[-37.8088788333, 175.2062702833, true],
[-37.8091632833, 175.20514875, true],
[-37.8094891167, 175.20384695, true],
[-37.8156715667, 175.2034881667, true],
[-37.8109189333, 175.2024631, true],
[-37.8108164333, 175.2039622, true],
[-37.8125773667, 175.2026079667, true],
[-37.8125799333, 175.2032824, true],
[-37.8125869, 175.2037423833, true],
[-37.8140266833, 175.2025706, true],
[-37.80932, 175.2051094333, true],
[-37.8098799667, 175.2040444167, true],
[-37.8094298833, 175.20561245, true],
[-37.8172409333, 175.2035291167, true],
[-37.8232166667, 175.22452865, true],
[-37.8225024333, 175.2249944667, true],
[-37.82334135, 175.2244748667, true],
[-37.8229725333, 175.2246809333, true],
[-37.8224034667, 175.22507345, true],
[-37.8227806, 175.2248285833, true],
[-37.8178801, 175.2181871667,true],
[-37.81811315, 175.2180543667,true],
[-37.8181739833, 175.21851995,true],
[-37.81797515, 175.2186312,true],
[-37.8181787, 175.2176995, true],
[-37.8183385333, 175.21812895,true],
[-37.8293053167, 175.2105357833, true],
[-37.8309444333, 175.21208735, true],
[-37.8306726667, 175.2115020833, true],
[-37.8300903, 175.2120791, true],
[-37.8289416167, 175.2113778333, true],
[-37.8274969167, 175.2113355167, true],
[-37.8199192667, 175.2173622833, true],
[-37.8200392833, 175.2174100167,true],
[-37.8196328, 175.2167642, true],
[-37.81752585, 175.2155467667, true],
[-37.81766615, 175.2153714167, true],
[-37.8179022667, 175.2151616833, true],
[-37.8191980333, 175.21664245, true],
[-37.81799325, 175.21565925, true],
[-37.8187486333, 175.2165228667, true],
[-37.81964875, 175.2172874167,true],
[-37.81925545, 175.2171617, true],
[-37.8190491667, 175.2170928333, true],
[-37.8194515667, 175.2172147167,true],
[-37.81981045, 175.21733245, true],
[-37.81876595, 175.2172445167, true],
[-37.8185999167, 175.2172441, true],
[-37.81816745, 175.21725905, true],
[-37.8182157167, 175.2164626333, true],
[-37.8180109667, 175.2173984167, true],
[-37.8179918, 175.217159, true],
[-37.8188473167, 175.2170330333, true],
[-37.8186481333, 175.2169800667, true],
[-37.8184132, 175.2169327333, true],
[-37.8202288333, 175.2174746333,true],
[-37.818193, 175.2169955667, true],
[-37.8178000833, 175.21733275, true],
[-37.8176839, 175.2168488333, true],
[-37.8198172, 175.2204960667,true],
[-37.819986, 175.22049635,true],
[-37.8197666, 175.2200825,true],
[-37.8193835833, 175.2191669667, true],
[-37.8193426333, 175.2198626667, true],
[-37.8192171667, 175.2191711, true],
[-37.8192621333, 175.2196364167, true],
[-37.8195289667, 175.2193943167,true],
[-37.81946, 175.2201499167,true],
[-37.8196037833, 175.219674,true],
[-37.8194712, 175.2204032, true],
[-37.8196381, 175.2203709333,true],
[-37.8200137667, 175.2201364333,true],
[-37.8191725167, 175.2193772833, true],
[-37.8214417333, 175.2256822167,true],
[-37.8210291, 175.2259429667,true],
[-37.8212328333, 175.2258132,true],
[-37.8216819833, 175.2253209,true],
[-37.8334697167, 175.2038651667, true],
[-37.8322603667, 175.2028621167, true],
[-37.8322013667, 175.2046802667, true],
[-37.8320576167, 175.2165535833, true],
[-37.8319540333, 175.20506915, true],
[-37.8316975667, 175.2053442333, true],
[-37.8328229833, 175.2062598, true],
[-37.83161565, 175.2074915, true],
[-37.83219305, 175.20629425, true],
[-37.8328549, 175.2080619667, true],
[-37.8321289667, 175.2084019333, true],
[-37.8322225167, 175.2120427667, true],
[-37.8321649, 175.21119325, true],
[-37.8321458833, 175.2131246333, true],
[-37.8327043833, 175.21377405, true],
[-37.8321267167, 175.2144058167, true],
[-37.83212555, 175.2096521333, true],
[-37.8331028667, 175.20928495, true],
[-37.82866875, 175.22177625, true],
[-37.8295602, 175.21924335, true],
[-37.8304707833, 175.2182986167, true],
[-37.83086, 175.2180687667, true],
[-37.8328604833, 175.2172892167, true],
[-37.8342575667, 175.2168357833, true],
[-37.8239713, 175.2245693667, true],
[-37.8365260167, 175.2170911, true],
[-37.8233928833, 175.2249669167, true],
[-37.8248650167, 175.2246300833, true],
[-37.8191798333, 175.2265331667, true],
[-37.8143243333, 175.2310940167, true],
[-37.81459255, 175.2320046, true],
[-37.81127515, 175.2356499167, true],
[-37.8126359667, 175.2340855167, true],
[-37.8096158333, 175.2375218167, true],
[-37.8315868667, 175.2177722833, false],
[-37.8160177667, 175.2299268333, false],
[-37.8204715667, 175.2265481833, false],
[-37.8206352, 175.2265670333, false],
[-37.8208412667, 175.2265323333, false],
[-37.8210184333, 175.22648325, false],
[-37.8212643833, 175.2270422167, false],
[-37.82119945, 175.2264274333, false],
[-37.82136485, 175.2263145667, false],
[-37.8215261, 175.22684075, false],
[-37.8215301833, 175.2262078, false],
[-37.8217701667, 175.2266360167, false],
[-37.8218376833, 175.22686725, false],
[-37.8217084667, 175.2260839667, false],
[-37.8219782333, 175.2265028333, false],
[-37.8218988833, 175.2259723, false],
[-37.8223939333, 175.2262447, false],
[-37.8223048667, 175.2256582833, false],
[-37.8226657, 175.2261230833, false],
[-37.8224199, 175.2255487833, false],
[-37.8229134167, 175.2259527833, false],
[-37.8226937833, 175.2253693167, false],
[-37.8231509667, 175.2258170333, false],
[-37.82295265, 175.2252571167, false],
[-37.8233779, 175.2256743833, false],
[-37.8232052667, 175.2251109333, false],
[-37.8236200333, 175.22553395, false],
[-37.82385775, 175.2253390833, false],
[-37.8203220167, 175.22650925, false],
[-37.8179795333, 175.2262826, false],
[-37.81038215, 175.2365298167, false],
[-37.8161746667, 175.2297239833, false],
[-37.8083635333, 175.233955, false],
[-37.82029495, 175.2214968167, false],
[-37.8204754333, 175.2247793333, false],
[-37.8205440833, 175.22344905, false],
[-37.8195974333, 175.2254019333,false],
[-37.8210801, 175.2237748667, false],
[-37.8209057333, 175.22389775, false],
[-37.8208016833, 175.2221582833, false],
[-37.8209372667, 175.2236919, false],
[-37.8210586833, 175.22351925, false],
[-37.82092905, 175.2234855333, false],
[-37.8208587333, 175.2231887667, false],
[-37.8210241167, 175.2230882, false],
[-37.8208547833, 175.2229410667, false],
[-37.8209917, 175.2228447667, false],
[-37.82097645, 175.2227176167, false],
[-37.8208099167, 175.2226765167, false],
[-37.8207666833, 175.2224338833, false],
[-37.8209508833, 175.2222094167, false],
[-37.82076515, 175.2219195167, false],
[-37.8207399667, 175.2218131667, false],
[-37.8203075833, 175.2240482833, false],
[-37.8205368167, 175.2237746667, false],
[-37.8205025833, 175.2231658, false],
[-37.820465, 175.2229733667, false],
[-37.82043535, 175.2227387, false],
[-37.8204582, 175.2225319667, false],
[-37.82024115, 175.2224347833, false],
[-37.8203792333, 175.2222631667, false],
[-37.82034095, 175.2219843, false],
[-37.8201566167, 175.2219446, false],
[-37.82030575, 175.2217594333, false],
[-37.8202966833, 175.2233158167, false],
[-37.8192714167, 175.2253842667,false],
[-37.81969695, 175.22516645,false],
[-37.8194904667, 175.22468815,false],
[-37.8198524333, 175.2249096667,false],
[-37.8200581833, 175.2247122,false],
[-37.8193447, 175.2244639667, false],
[-37.8208238, 175.2241340167, false],
[-37.8193183667, 175.22515695, false],
[-37.81940575, 175.2249383333,false],
[-37.8211855167, 175.2242545333, false],
[-37.8207094833, 175.22430275, false],
[-37.82027725, 175.22488135, false],
[-37.8202305833, 175.2245652667, false],
[-37.8205049667, 175.2244201333, false],
[-37.8196320333, 175.2255586, false],
[-37.8209711, 175.2250444667,false],
[-37.82120665, 175.2252942833,false],
[-37.8210184, 175.2254290333,false],
[-37.8213430333, 175.2252086167,false],
[-37.8207887833, 175.2251555667, false],
[-37.82060805, 175.2257042333, false],
[-37.8208330333, 175.22553905,false],
[-37.8216988833, 175.2249665667,false],
[-37.8215665833, 175.2246573333,false],
[-37.8213729, 175.2247789333,false],
[-37.8211700667, 175.2249324333,false],
[-37.8205967667, 175.2252867, false],
[-37.8204008833, 175.2254234667, false],
[-37.82043265, 175.22582195, false],
[-37.8202037333, 175.2255415833, false],
[-37.8200154333, 175.2256547667, false],
[-37.8197443167, 175.2256164833, false],
[-37.8202814333, 175.22590955, false],
[-37.8202967667, 175.21462555, false],
[-37.82204485, 175.21819735, false],
[-37.8224241, 175.2179326667, false],
[-37.8215043167, 175.2227943833, false],
[-37.8219082, 175.2255408167,false],
[-37.8216963, 175.2240856667, false],
[-37.8213418333, 175.2188135667, false],
[-37.8204966333, 175.2183406333, false],
[-37.8221799833, 175.21122085, false],
[-37.8217387, 175.22431625, false],
[-37.8218650167, 175.2149734167, false],
[-37.8214083333, 175.2220152667, false],
[-37.8213738333, 175.2217301, false],
[-37.8221598167, 175.2247839333,false],
[-37.8216356, 175.2235610667, false],
[-37.8212188167, 175.2221387333, false],
[-37.8200466667, 175.2166111, false],
[-37.8216679333, 175.2238393333, false],
[-37.8211582833, 175.22031685, false],
[-37.8221918667, 175.2250378333,false],
[-37.8187410167, 175.2067290167, false],
[-37.8206532, 175.2170745667, false],
[-37.8212348667, 175.2181024167, false],
[-37.8213057667, 175.2185351167, false],
[-37.8214571, 175.2145877333, false],
[-37.82207085, 175.2136727167, false],
[-37.82190125, 175.2123493, false],
[-37.8207519667, 175.2102467333, false],
[-37.8212159, 175.2096407, false],
[-37.8208313833, 175.2067756, false],
[-37.8214413333, 175.2222779833, false],
[-37.8206921333, 175.2182549, false],
[-37.82043975, 175.2181215, false],
[-37.8218791, 175.2252452167, false],
[-37.82029435, 175.2169818, false],
[-37.8215885167, 175.22308725, false],
[-37.8215897333, 175.2233113167, false],
[-37.82167455, 175.2183345, false],
[-37.8217164667, 175.2179857333, false],
[-37.82147385, 175.22253565, false],
[-37.8206765333, 175.2160304333, false],
[-37.8188941, 175.2069437, false],
[-37.8188068333, 175.2068104833, false],
[-37.8193742667, 175.2085580333, false],
[-37.8214388167, 175.2200072, false],
[-37.8209547167, 175.2157149167, false],
[-37.82088565, 175.2164849333, false],
[-37.82136235, 175.2159546667, false],
[-37.8219607333, 175.2232987, false],
[-37.8210501, 175.2179753833, false],
[-37.8212466667, 175.2222175833, false],
[-37.8213836167, 175.22300555, false],
[-37.821339, 175.2227439167, false],
[-37.8208144333, 175.2173117167, false],
[-37.8189363667, 175.2211582333, false],
[-37.8196676167, 175.2209947333, false],
[-37.8194113, 175.2211991, false],
[-37.81883205, 175.2209747, false],
[-37.8186925833, 175.2207728833, false],
[-37.8199931833, 175.2240802167,false],
[-37.8191759333, 175.2208279333, false],
[-37.81835395, 175.2196571667, false],
[-37.8198807333, 175.2235938167,false],
[-37.8194567833, 175.22349015,false],
[-37.8200507833, 175.21933875, false],
[-37.8197902167, 175.2182408, false],
[-37.81991635, 175.21797195, false],
[-37.8198223833, 175.2179361833, false],
[-37.8201049333, 175.2197347167, false],
[-37.8199380333, 175.21836645, false],
[-37.82003775, 175.2182443833, false],
[-37.8200944167, 175.21803015, false],
[-37.8201259667, 175.2185610667, false],
[-37.82026275, 175.2188001167, false],
[-37.8188917833, 175.2203729333, false],
[-37.8184921333, 175.2203832, false],
[-37.8190387167, 175.2206181333, false],
[-37.81968705, 175.2224253667, false],
[-37.81981205, 175.223119, false],
[-37.8193882833, 175.2229798333, false],
[-37.8190901167, 175.2227829833, false],
[-37.8193593, 175.2227247833, false],
[-37.81993935, 175.2226893333, false],
[-37.81842725, 175.2201474167, false],
[-37.8187965833, 175.2200475333, false],
[-37.8183878167, 175.2198735667, false],
[-37.8188702167, 175.2196982333, false],
[-37.82027885, 175.2209890667, false],
[-37.8199839667, 175.2190668, false],
[-37.8187008333, 175.21973745, false],
[-37.8196820167, 175.22262455, false],
[-37.8186528333, 175.2191018, false],
[-37.8182912167, 175.21915535, false],
[-37.81870525, 175.21945675, false],
[-37.8195044333, 175.2214081833, false],
[-37.81857075, 175.2205925167, false],
[-37.8195656167, 175.2181396, false],
[-37.8198411667, 175.2213911167, false],
[-37.8195851667, 175.2240869667,false],
[-37.8192829167, 175.2239720167, false],
[-37.8193257, 175.2224725667, false],
[-37.8197290167, 175.2224129833, false],
[-37.8196499333, 175.2221262667, false],
[-37.8196755333, 175.2243193333,false],
[-37.8192091667, 175.22166805, false],
[-37.81957585, 175.22166585, false],
[-37.8199106833, 175.2238436,false],
[-37.81953715, 175.22372785, false],
[-37.8193377833, 175.22378105,false],
[-37.8189702833, 175.2184597333, false],
[-37.8185876167, 175.21821495, false],
[-37.8185706333, 175.2178869167, false],
[-37.8191945667, 175.21845965, false],
[-37.8188482167, 175.2176680833, false],
[-37.8194043667, 175.21852395, false],
[-37.8196233333, 175.2186248333, false],
[-37.81920055, 175.2179787167, false],
[-37.8198255, 175.2188011167, false],
[-37.8205994333, 175.2207248667, false],
[-37.8193045333, 175.2222075667, false],
[-37.8205621167, 175.2204520167, false],
[-37.8180799333, 175.2194407, false],
[-37.8208301833, 175.2206735833, false],
[-37.8202558, 175.2206809333, false],
[-37.81941275, 175.21804965, false],
[-37.8190239, 175.2179808833, false],
[-37.8187854, 175.2180712167, false],
[-37.8187476667, 175.2186516333, false],
[-37.8182977, 175.21889655, false],
[-37.81831675, 175.2194069833, false],
[-37.8192735167, 175.2219502167, false],
[-37.8196219167, 175.22189825, false],
[-37.81962665, 175.2216432667, false],
[-37.8192782833, 175.2209942, false],
[-37.8208129833, 175.2209176833, false],
[-37.8206351167, 175.2209705667, false],
[-37.8203109333, 175.2212402667, false],
[-37.81909575, 175.22139795, false],
[-37.8197787167, 175.2228814, false],
[-37.8195628333, 175.21791605, false],
[-37.8198373833, 175.2233606833,false],
[-37.8194342167, 175.22322975, false]
];