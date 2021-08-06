sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"salescloud/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("salescloud.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");
            var oData = {
				"aperturaPollVerdad": [],
				"totalTablaReproductora": [{
					"cantidad": "0"
				}],
				"table_cuentas": [{"name":"bFurneauxl0","city":"La paz","country":"Bolivia","mainContac":"Shurlock Durrell","registeredBy":"sdurrell0","state":false},
                                {"name":"bmitchenson17","city":"La paz","country":"Bolivia","mainContac":"Hastie Kynman","registeredBy":"hkynman18","state":true},
                                {"name":"bfyfield1b","city":"Sucre","country":"Bolivia","mainContac":"Lauryn Lydden","registeredBy":"llydden19","state":true},
                                {"name":"ibreadon1c","city":"Sucre","country":"Bolivia","mainContac":"Waiter Chatto","registeredBy":"wchatto1c","state":true},
                                {"name":"ubotly1d","city":"Sucre","country":"Bolivia","mainContac":"Jillian Delgadillo","registeredBy":"jdelgadillo1d","state":false}],
				"table_contactos": [{"name":"Irwinn Furneaux","count":"bFurneauxl0","role":"Construction Worker","area":"Crawler","telephone":"0168-0803","phone":"797-20-3011","state":true},
                                {"name":"Bowie Mitchenson","count":"bmitchenson17","role":"Engineer","area":"Trencher","telephone":"37000-275","phone":"306-80-9103","state":false}, 
                                {"name":"Benedetta Fyfield","count":"bfyfield1b","role":"Subcontractor","area":"Scraper","telephone":"49288-0051","phone":"180-11-8693","state":false},
                                {"name":"Ignaz Breadon","count":"ibreadon1c","role":"Construction Foreman","area":"Dump Truck","telephone":"0527-1768","phone":"718-09-6060","state":false},
                                {"name":"Uri Botly","count":"ubotly1d","role":"Architect","area":"Bulldozer","telephone":"76214-047","phone":"813-72-1568","state":false}],
                /*"table_clientes":[{"name":"Irwinn Furneaux","telephone":"66582-321","phone":"697-06-4836","email":"pbatte0@taobao.com","address":"76739 Mesta Trail","state":false},
{"name":"Bowie Mitchenson","telephone":"64990-605","phone":"897-98-0559","email":"cdanilchev17@nih.gov","address":"240 Ridgeway Park","state":true},
{"name":"Benedetta Fyfield","telephone":"60913-999","phone":"171-47-9184","email":"fjotcham18@theglobeandmail.com","address":"7913 Darwin Hill","state":false},
{"name":"Ignaz Breadon","telephone":"52544-940","phone":"324-26-9115","email":"kfullard19@google.co.uk","address":"42469 Hoepker Lane","state":false},
{"name":"Uri Botly","telephone":"66758-130","phone":"166-54-9948","email":"hagus1a@cocolog-nifty.com","address":"27 Gale Plaza","state":true}],
*/
                "table_group":[{"name":"Grupo objetivo sector agricola","createdBy":"Georgetta","changedBy":"Simonazzi","total":1,"state":false,"id":1},
{"name":"Grupo objetivo fetilizantes","createdBy":"Tomasina","changedBy":"Woodings","total":44,"state":true,"id":44},
{"name":"Grupo objetivo maquinaria","createdBy":"Brand","changedBy":"Rate","total":45,"state":false,"id":45},
{"name":"Grupo objetivo riego","createdBy":"Gabie","changedBy":"Boerderman","total":46,"state":true,"id":46},
{"name":"Grupo objetivo alimentacion","createdBy":"Duane","changedBy":"Stonehewer","total":47,"state":false,"id":47},
{"name":"grupo objetivo haciendas","createdBy":"Marie-jeanne","changedBy":"Bettenson","total":48,"state":false,"id":48}],      
                "table_empleado":[{"name":"Patsy Fennelow","rol":"Nurse","Department":"Support","email":"pfennelow0@bloglovin.com","telephone":"(309) 7166924","phone":"258 915 0203"},
{"name":"Cesare Clyma","rol":"Tax Accountant","Department":"Product Management","email":"cclyma18@redcross.org","telephone":"(355) 7728591","phone":"761 178 3997"},
{"name":"Joshua Rossant","rol":"Librarian","Department":"Business Development","email":"jrossant19@vimeo.com","telephone":"(564) 6625027","phone":"124 323 5762"},
{"name":"Rafe Pearl","rol":"Dental Hygienist","Department":"Accounting","email":"rpearl1a@dell.com","telephone":"(288) 1705530","phone":"296 980 6754"},
{"name":"Seward Greenhow","rol":"Occupational Therapist","Department":"Sales","email":"sgreenhow1b@hatena.ne.jp","telephone":"(435) 5338488","phone":"917 379 4335"},
{"name":"Leta Bettaney","rol":"Quality Control Specialist","Department":"Support","email":"lbettaney1c@jiathis.com","telephone":"(125) 4363726","phone":"591 447 3449"},
                            {"name":"Vail Drover","rol":"Quality Control Specialist","Department":"Business Development","email":"vdrover1d@squarespace.com","telephone":"(342) 6170444","phone":"249 269 6275"}],
                "table_socios":[{"namepartner":"Stavro Fenty","state":false,"city":"Sucre","country":"Bolivia","contact":"Stavro","namecontact":"Collins, Zemlak and Parisian","telephone":"(481) 5863585","phone":"377 684 3799","email":"sfenty0@list-manage.com"},
{"namepartner":"Zebadiah Shoubridge","state":false,"city":"La paz","country":"Bolivia","contact":"Zebadiah","namecontact":"Schuster LLC","telephone":"(606) 5804202","phone":"400 954 8292","email":"zshoubridge1@desdev.cn"},
{"namepartner":"Claudian Coppock.","state":false,"city":"La paz","country":"Bolivia","contact":"Claudian","namecontact":"Haley-Bins","telephone":"(397) 6375487","phone":"838 894 3568","email":"ccoppock2@github.io"},
{"namepartner":"Ray Bycraft","state":false,"city":"La paz","country":"Bolivia","contact":"Ray","namecontact":"Hettinger-McLaughlin","telephone":"(669) 7669959","phone":"368 109 3742","email":"rbycraft3@vk.com"},
{"namepartner":"Fabian Sivewright","state":true,"city":"Sucre","country":"Bolivia","contact":"Fabian","namecontact":"Hilpert LLC","telephone":"(241) 2462981","phone":"772 750 8978","email":"fsivewright4@nifty.com"},
{"namepartner":"Stillman Eschalotte","state":true,"city":"Sucre","country":"Bolivia","contact":"Stillman","namecontact":"Schroeder-Torp","telephone":"(278) 1299713","phone":"978 419 6427","email":"seschalotte5@sun.com"}],
                "table_campania":[{"name":"Campaña 2021 enero","channel":1,"target":"Grupo objetivo fetilizantes","state":"activo","execution":"proceso","responsable":"Olivette"},
{"name":"Campaña 2021 enero","channel":2,"target":"Grupo objetivo maquinaria","state":"activo","execution":"proceso","responsable":"Nicholle"},
{"name":"Campaña 2021 febrero","channel":3,"target":"Grupo objetivo fetilizantes","state":"activo","execution":"proceso","responsable":"Jobie"},
{"name":"Campaña 2021 marzo","channel":4,"target":"Grupo objetivo riego","state":"activo","execution":"proceso","responsable":"Gerry"},
{"name":"Campaña 2021 abril","channel":5,"target":"Grupo objetivo alimentacion","state":"activo","execution":"proceso","responsable":"Feliza"},
{"name":"Campaña 2021 mayo","channel":6,"target":"Grupo objetivo agricola","state":"activo","execution":"proceso","responsable":"Zoe"},
{"name":"Campaña 2021 junio","channel":7,"target":"Grupo objetivo haciendas","state":"activo","execution":"proceso","responsable":"Dion"}],
                "table_gestioncontenido":[{"name":"Emlynn January 1st","state":true,"content":"Acualizaciones","category":"Sportvan G30","createBy":"January 1st","modifiedBy":"Emlynn"},
{"name":"Burk Pitherick","state":false,"content":"Boletines informativos","category":"3 Series","createBy":"Pitherick","modifiedBy":"Burk"},
{"name":"Matelda Marcam","state":true,"content":"Encuestas","category":"Integra","createBy":"Marcam","modifiedBy":"Matelda"},
{"name":"Alidia Towson","state":false,"content":"Eventos","category":"Continental Super","createBy":"Towson","modifiedBy":"Alidia"},
{"name":"Burgess Wrack","state":true,"content":"Ofertas","category":"Ram Van 1500","createBy":"Wrack","modifiedBy":"Burgess"}],
                "table_leads":[{"namelead":"Tres-Zap","namecontact":"Darren","capaniacliente":"Campaña 2021 febrero","nivelcalificacion":"frio","state":"abierto","priority":"normal","startdate":"4/12/2021","finishdate":"5/12/2021","responsable":"Darren Ormrod"},
{"namelead":"Bigtax","namecontact":"Lyle","capaniacliente":"bmitchenson17","nivelcalificacion":"tibio","state":"abierto","priority":"normal","startdate":"29/8/2020","finishdate":"29/8/2021","responsable":"Lyle Summerfield"},
{"namelead":"Greenlam","namecontact":"Osborn","capaniacliente":"bfyfield1b","nivelcalificacion":"frio","state":"abierto","priority":"normal","startdate":"13/12/2020","finishdate":"16/12/2021","responsable":"Osborn Edmead"},
{"namelead":"Greenlam","namecontact":"Denny","capaniacliente":"Campaña 2021 febrero","nivelcalificacion":"tibio","state":"abierto","priority":"normal","startdate":"15/1/2021","finishdate":"29/1/2021","responsable":"Denny Loding"},
{"namelead":"Greenlam","namecontact":"Alistair","capaniacliente":"Campaña 2021 enero","nivelcalificacion":"frio","state":"abierto","priority":"normal","startdate":"9/12/2020","finishdate":"12/12/2020","responsable":"Alistair Grogona"},
{"namelead":"Bamity","namecontact":"Weider","capaniacliente":"Campaña 2021 marzo","nivelcalificacion":"caliente","state":"abierto","priority":"normal","startdate":"12/11/2020","finishdate":"14/11/2021","responsable":"Weider Simonaitis"},
{"namelead":"Ronstring","namecontact":"Simone","capaniacliente":"Campaña 2021 junio","nivelcalificacion":"caliente","state":"abierto","priority":"normal","startdate":"3/9/2020","finishdate":"12/9/2020","responsable":"Simone Manuello"}],
                "table_oportunidades":[{"name":"Cookley","accounts":"Forrester","closingdate":"10/31/2020","sales":"oportunidad identificada","responsable":"Forrester Blundin","state":1},
{"name":"Bamity","accounts":"Reynold","closingdate":"24/7/2021","sales":"oportunidad identificada","responsable":"Reynold Dunstall","state":2},
{"name":"Zamit","accounts":"Karl","closingdate":"12/11/2020","sales":"oportunidad identificada","responsable":"Karl Keppel","state":3},
{"name":"Biodex","accounts":"Inglis","closingdate":"3/3/2021","sales":"oportunidad identificada","responsable":"Inglis Tofano","state":4},
{"name":"Gembucket","accounts":"Boniface","closingdate":"7/7/2021","sales":"oportunidad identificada","responsable":"Boniface Auty","state":5},
{"name":"Namfix","accounts":"Gerhardt","closingdate":"17/1/2021","sales":"oportunidad identificada","responsable":"Gerhardt Stamp","state":6}],
                "table_forecasts":[{"name":"forecast 2021T1","responsable":"Kiersten Shepton","moneda":"peso boliviano","from":"01/01/2021","until":"31/03/2021"},
{"name":"Forecast 2021T2","responsable":"Kim Moscrop","moneda":"peso boliviano","from":"10/03/2021","until":"12/06/2021"},
{"name":"Forecast2021H1","responsable":"Rafaela Tytcomb","moneda":"peso boliviano","from":"5/06/2020","until":"23/10/2020"}],
                "table_listaprecios":[{"name":"lista de precio 202101","moneda":"peso boliviano","from":"1/1/2021","until":"31/1/2021"},
{"name":"lista de precios 202102","moneda":"peso boliviano","from":"1/2/2021","until":"28/2/2021"},
{"name":"lista de precios 202103","moneda":"peso boliviano","from":"1/3/2021","until":"31/3/2021"},
{"name":"lista de precios 202104","moneda":"peso boliviano","from":"1/4/2021","until":"30/4/2021"},
{"name":"lista de precios 202105","moneda":"peso boliviano","from":"1/5/2021","until":"31/5/2021"},
{"name":"lista de precios 202106","moneda":"peso boliviano","from":"1/6/2021","until":"30/6/2021"}],
                "table_reuniones":[{"asunto":"reunion de revision 20210801","state":"realizado","startdate":"17/4/2021","enddate":"17/4/2021","accounts":"vstoppe0","maincontact":"Stoppe","telephono":"686-237-8567","note":"forecast"},
{"asunto":"reunion de revision 20210802","state":"realizado","startdate":"18/9/2020","enddate":"18/9/2021","accounts":"kreven1","maincontact":"Reven","telephono":"477-763-9968","note":"local area network"},
{"asunto":"reunion de revision 20210803","state":"realizado","startdate":"26/1/2021","enddate":"26/1/2021","accounts":"cmcmichell2","maincontact":"McMichell","telephono":"146-120-9317","note":"neutral"}],

"table_haciendaestatus":[{"hacienda":"hacienda 1","asunto":"reunion de revision 20210801","state":"realizado","startdate":"17/4/2021","enddate":"17/4/2021","accounts":"vstoppe0","maincontact":"Stoppe","telephono":"686-237-8567","note":"forecast"},
{"hacienda":"hacienda 2","asunto":"reunion de revision 20210802","state":"realizado","startdate":"18/9/2020","enddate":"18/9/2021","accounts":"kreven1","maincontact":"Reven","telephono":"477-763-9968","note":"local area network"},
{"hacienda":"hacienda 3","asunto":"reunion de revision 20210803","state":"realizado","startdate":"26/1/2021","enddate":"26/1/2021","accounts":"cmcmichell2","maincontact":"McMichell","telephono":"146-120-9317","note":"neutral"}],

                "table_llamadas":[{"asunto":"Health Coach I","state":"realizado","startdate":"25/7/2021","responsable":"Whitlow","client":"pwhitlow0","telephono":"108-711-8529","note":"tertiary"},
{"asunto":"Technical Writer","state":"realizado","startdate":"22/1/2021","responsable":"Woodroffe","client":"swoodroffe1","telephono":"101-799-6252","note":"tertiary"},
{"asunto":"Research Nurse","state":"realizado","startdate":"7/9/2020","responsable":"Tyce","client":"ftyce2","telephono":"856-338-7712","note":"Graphical User Interface"},
{"asunto":"Environmental Tech","state":"realizado","startdate":"15/5/2021","responsable":"Kulic","client":"dkulic3","telephono":"935-301-7100","note":"Optimized"},
{"asunto":"Administrative Officer","state":"realizado","startdate":"12/5/2021","responsable":"Robke","client":"brobke4","telephono":"109-672-2758","note":"circuit"}],
                "table_tareas":[{"asunto":"Chief Design Engineer","state":"realizado","startdate":"7/8/2021","expirationdate":"12/8/2021","enddate":"12/8/2021","accounts":"Gristock","telephono":"466-867-8287","responsable":"Clem","createby":"cgristock0","updateby":"cgristock0","completby":"cgristock0","note":"service-desk"},
{"asunto":"Legal Assistant","state":"realizado","startdate":"24/1/2021","expirationdate":"29/1/2021","enddate":"29/1/2021","accounts":"Clementucci","telephono":"248-227-9166","responsable":"Leela","createby":"lclementucci1","updateby":"lclementucci1","completby":"lclementucci1","note":"Automated"},
{"asunto":"Analyst Programmer","state":"realizado","startdate":"3/4/2021","expirationdate":"8/4/2021","enddate":"8/4/2021","accounts":"Doret","telephono":"160-910-9201","responsable":"Cassandry","createby":"cdoret2","updateby":"cdoret2","completby":"cdoret2","note":"Organic"},
{"asunto":"Structural Analysis Engineer","state":"realizado","startdate":"23/10/2020","expirationdate":"28/10/2021","enddate":"28/10/2021","accounts":"Woodstock","telephono":"708-700-0333","responsable":"Shelden","createby":"swoodstock3","updateby":"swoodstock3","completby":"swoodstock3","note":"core"},
{"asunto":"Geologist I","state":"realizado","startdate":"16/8/2021","expirationdate":"21/8/2021","enddate":"21/8/2021","accounts":"Spadazzi","telephono":"730-998-8222","responsable":"Mellisa","createby":"mspadazzi4","updateby":"mspadazzi4","completby":"mspadazzi4","note":"system engine"}],
                "table_actividades":[{"name":"lista de reuniones 20210102","type":"lista de reuniones","state":false,"responsable":"Bonita","startdate":"5/22/2021","numberactivity":1,"createby":"btallet0","updateby":"btallet0"},
{"name":"lista de llamadas 20210102","type":"lista de tareas","state":false,"responsable":"Imojean","startdate":"5/15/2021","numberactivity":2,"createby":"ilacotte1","updateby":"ilacotte1"},
{"name":"lista de tareas 20210102","type":"lista de llamadas","state":false,"responsable":"Emmy","startdate":"2/19/2021","numberactivity":3,"createby":"equant2","updateby":"equant2"}],
                "table_vistas":[{"name":"Willie McKimm","startday":"20/12/2020","endday":"22/12/2021","responsable":"Willie","createby":"wmckimm0","state":false},
{"name":"Kristos Hainge","startday":"3/5/2021","endday":"5/5/2021","responsable":"Kristos","createby":"khainge1","state":true},
{"name":"Roi Rojel","startday":"4/1/2021","endday":"6/1/2020","responsable":"Roi","createby":"rrojel2","state":true},
{"name":"Woodman Riordan","startday":"19/8/2020","endday":"21/8/2021","responsable":"Woodman","createby":"wriordan3","state":false}],
                "table_recordatorios":[{"client":"Karlen Franzolini","factura":"0378-5501","monto":"$0.52","statefactura":"pendiente","experydate":"3/12/2021","delaynumber":1,"lastmanagementdate":"6/16/2021","lastmanagementcoment":"Tiehm's Beardtongue","state":"ralizada","note":"Mylan Pharmaceuticals Inc.","aviso":"Skibox"},
{"client":"Dee Freiburger","factura":"53808-0979","monto":"$4.00","statefactura":"pendiente","experydate":"11/3/2020","delaynumber":2,"lastmanagementdate":"12/18/2020","lastmanagementcoment":"Syrian-privet","state":"ralizada","note":"State of Florida DOH Central Pharmacy","aviso":"Camido"},
{"client":"Annalise McVicar","factura":"55289-593","monto":"$3.09","statefactura":"pendiente","experydate":"7/23/2021","delaynumber":3,"lastmanagementdate":"5/19/2021","lastmanagementcoment":"Common Mare's-tail","state":"ralizada","note":"PD-Rx Pharmaceuticals, Inc.","aviso":"Kare"}],
                "table_groupData":[{"idcuenta":1,"namecuenta":"Browsezoom","contact":"Mårten","address":"ayokel0@bbc.co.uk"},
{"idcuenta":2,"namecuenta":"Yamia","contact":"Françoise","address":"elehr1@epa.gov"},
{"idcuenta":3,"namecuenta":"Tagchat","contact":"Marylène","address":"pmoorwood2@toplist.cz"},
{"idcuenta":4,"namecuenta":"Feedbug","contact":"Desirée","address":"bthirtle3@ebay.co.uk"},
{"idcuenta":5,"namecuenta":"Meejo","contact":"Lucrèce","address":"cmorefield4@last.fm"},
{"idcuenta":6,"namecuenta":"Mydo","contact":"Yú","address":"iminards5@sphinn.com"},
{"idcuenta":7,"namecuenta":"Centizu","contact":"Almérinda","address":"nrichings6@usgs.gov"},
{"idcuenta":8,"namecuenta":"Kwimbee","contact":"Gaëlle","address":"lpringle7@wix.com"},
{"idcuenta":9,"namecuenta":"Camimbo","contact":"Véronique","address":"cwain8@netvibes.com"},
                                {"idcuenta":10,"namecuenta":"Pixonyx","contact":"Yú","address":"ohiggonet9@forbes.com"}],
                "table_datacuentas":[{"name":"Sidoney Stoney","rol":"Project Manager","telephone":"840-113-5072","email":"sstoney0@loc.gov"},
{"name":"Cristine Birtwell","rol":"Project Manager","telephone":"875-692-6813","email":"cbirtwell1@so-net.ne.jp"},
{"name":"Nataniel Satteford","rol":"Construction Expeditor","telephone":"747-953-1619","email":"nsatteford2@liveinternet.ru"},
{"name":"Maegan Beardwell","rol":"Construction Worker","telephone":"641-996-7229","email":"mbeardwell3@vimeo.com"},
{"name":"Celestia Consterdine","rol":"Construction Worker","telephone":"676-832-3633","email":"cconsterdine4@lulu.com"},
{"name":"Leisha Pietz","rol":"Construction Expeditor","telephone":"886-397-9321","email":"lpietz5@ox.ac.uk"},
{"name":"Ashlen Salway","rol":"Surveyor","telephone":"312-249-4048","email":"asalway6@alibaba.com"},
{"name":"Morley Jaffra","rol":"Architect","telephone":"911-400-2430","email":"mjaffra7@cisco.com"},
{"name":"Turner Cossar","rol":"Electrician","telephone":"116-370-8733","email":"tcossar8@phpbb.com"},
                                {"name":"Kacy MacAne","rol":"Project Manager","telephone":"274-310-8088","email":"kmacane9@ucoz.ru"}],
                "table_datacuentasdirecciones":[{"address":"663 Red Cloud Way","telephone":"794-864-5099","principal":"Research and Development"},
{"address":"62408 Killdeer Junction","telephone":"226-418-5215","principal":"Legal"},
{"address":"534 Nobel Street","telephone":"993-331-9620","principal":"Business Development"},
{"address":"19 Golden Leaf Terrace","telephone":"232-319-3963","principal":"Engineering"},
{"address":"033 Burrows Point","telephone":"784-825-1097","principal":"Business Development"},
{"address":"48471 Melby Avenue","telephone":"743-678-9830","principal":"Training"},
{"address":"9372 Pleasure Hill","telephone":"656-998-3671","principal":"Business Development"},
{"address":"6 High Crossing Alley","telephone":"244-939-9878","principal":"Engineering"},
{"address":"7 Forster Pass","telephone":"678-473-9064","principal":"Sales"},
                                {"address":"484 Bluejay Hill","telephone":"726-853-3736","principal":"Research and Development"}],
                "table_datalistaprecios":[{"codproducto":"58118-7927","description":"Removal of Drainage Device from Upper Bone, Perc Approach","monto":"$120","preciounidad":"$12"},
{"codproducto":"17271-107","description":"Drainage of L Ant Tib Art, Perc Endo Approach, Diagn","monto":"$240","preciounidad":"$24"},
{"codproducto":"59572-630","description":"Insert Intralum Dev in L Less Saphenous, Perc Endo","monto":"$360","preciounidad":"$26"}],
                "table_datavistas":[{"date":"5/22/2021","account":"Creavin","timetravel":"8:52 AM","timepreparation":"1:48 PM","starttime":"1:42 AM","duration":"2:03 PM","endtime":"5:48 PM"},
{"date":"3/26/2021","account":"Colthurst","timetravel":"4:46 AM","timepreparation":"5:01 AM","starttime":"3:23 PM","duration":"3:51 AM","endtime":"1:13 AM"},
{"date":"6/3/2021","account":"Boame","timetravel":"1:22 PM","timepreparation":"8:08 PM","starttime":"12:47 PM","duration":"4:04 AM","endtime":"9:24 PM"},
{"date":"7/29/2021","account":"Ianelli","timetravel":"7:53 AM","timepreparation":"1:00 AM","starttime":"4:48 AM","duration":"5:14 AM","endtime":"12:18 AM"},
{"date":"12/13/2020","account":"Silby","timetravel":"11:03 AM","timepreparation":"5:51 PM","starttime":"4:58 PM","duration":"10:18 AM","endtime":"4:48 PM"},
{"date":"1/20/2021","account":"Niland","timetravel":"5:35 AM","timepreparation":"9:21 PM","starttime":"2:12 PM","duration":"12:52 PM","endtime":"1:21 AM"},
{"date":"12/4/2020","account":"Heynel","timetravel":"9:27 PM","timepreparation":"12:26 AM","starttime":"4:41 PM","duration":"1:58 AM","endtime":"12:27 PM"},
{"date":"12/22/2020","account":"Hynard","timetravel":"9:56 PM","timepreparation":"8:50 PM","starttime":"5:37 AM","duration":"4:41 AM","endtime":"8:54 AM"},
{"date":"3/27/2021","account":"Lavigne","timetravel":"4:13 AM","timepreparation":"2:19 PM","starttime":"12:03 AM","duration":"7:07 PM","endtime":"10:39 AM"},
                                {"date":"3/2/2021","account":"Jacquest","timetravel":"11:34 AM","timepreparation":"8:06 PM","starttime":"8:50 PM","duration":"9:18 PM","endtime":"1:49 PM"}],
                "list_select":[{"listId":"1","vendedor":"Huberto Longo","zona":"America/Guatemala","hacienda":"Beijing University of Science and Technology"},
                            {"listId":"2","vendedor":"Seamus Domico","zona":"America/Sao_Paulo","hacienda":"Capilano College"},
                            {"listId":"3","vendedor":"Sunny Crick","zona":"Asia/Kuala_Lumpur","hacienda":"Université de Thiès"},
                            {"listId":"4","vendedor":"Consuelo Giocannoni","zona":"Africa/Casablanca","hacienda":"École des Hautes Études Commerciales"},
                            {"listId":"5","vendedor":"Carline Stanlock","zona":"America/Toronto","hacienda":"Hardin-Simmons University"}],
                
                "list_empresas":[{"empresa":"Blogtag","nombre":"Renée","address":"675 Elgar Road"},
{"empresa":"Demizz","nombre":"Jú","address":"79 Merrick Circle"},
{"empresa":"Rooxo","nombre":"Cléopatre","address":"7 Corry Avenue"},
{"empresa":"Leexo","nombre":"Almérinda","address":"648 Mallory Alley"},
{"empresa":"Omba","nombre":"Eloïse","address":"92442 Porter Parkway"}],

"table_estadistica":[{"visitas":10,"distancia":"30km","asunto":"reunion de revision 20210801","state":"realizado","startdate":"17/4/2021","enddate":"17/4/2021","accounts":"vstoppe0","maincontact":"Stoppe","telephono":"686-237-8567","note":"forecast"},
{"visitas":20,"distancia":"42km","asunto":"reunion de revision 20210802","state":"realizado","startdate":"18/9/2020","enddate":"18/9/2021","accounts":"kreven1","maincontact":"Reven","telephono":"477-763-9968","note":"local area network"},
{"visitas":30,"distancia":"67km","asunto":"reunion de revision 20210802","state":"realizado","startdate":"18/9/2020","enddate":"18/9/2021","accounts":"kreven1","maincontact":"Reven","telephono":"477-763-9968","note":"local area network"},
{"visitas":40,"distancia":"85km","asunto":"reunion de revision 20210803","state":"realizado","startdate":"26/1/2021","enddate":"26/1/2021","accounts":"cmcmichell2","maincontact":"McMichell","telephono":"146-120-9317","note":"neutral"}],
"list_visualizacion":[{"accounts":"vstoppe0","mora":"100","credito":"200","note":"forecast"},
{"accounts":"kreven1","mora":"200","credito":"400","note":"local area network"},
{"accounts":"cmcmichell2","mora":"1000","credito":"1000","note":"neutral"}],

                "list_productos":[{"ProductName": "Pineapple","Quantity": 21,"ExtendedPrice": 87.29,"ShipperName": "Fun Inc.","ShippedDate": "2015-04-01T00:00:00", "Status": "A"},
  {"ProductName": "Milk","Quantity": 4,"ExtendedPrice": 9.99,"ShipperName": "ACME","ShippedDate": "2015-02-18T00:00:00","Status": "B"},
  {"ProductName": "Canned Beans","Quantity": 3,"ExtendedPrice": 6.850,"ShipperName": "ACME","ShippedDate": "2015-03-02T00:00:00","Status": "B"},
  {"ProductName": "Salad","Quantity": 2,"ExtendedPrice": 8.89,"ShipperName": "ACME","ShippedDate": "2015-04-12T00:00:00","Status": "C"},
  {"ProductName": "Bread", "Quantity": 1,"ExtendedPrice": 2.712,"ShipperName": "Fun Inc.","ShippedDate": "2015-01-27T00:00:00","Status": "A"}],
  
  "table_clientes":[{"name":"Irwinn Furneaux","telephone":"66582-321","phone":"697-06-4836","email":"pbatte0@taobao.com","address":"76739 Mesta Trail","state":false,"productos":[{"ProductName": "Pineapple","Quantity": 21,"ExtendedPrice": 87.2000,"ShipperName": "Fun Inc.","ShippedDate": "2015-04-01T00:00:00", "Status": "A"},
{"ProductName": "Milk","Quantity": 4,"ExtendedPrice": 9.99999,"ShipperName": "ACME","ShippedDate": "2015-02-18T00:00:00","Status": "B"}]},
{"name":"Bowie Mitchenson","telephone":"64990-605","phone":"897-98-0559","email":"cdanilchev17@nih.gov","address":"240 Ridgeway Park","state":true ,"productos":[{"ProductName": "Milk","Quantity": 4,"ExtendedPrice": 9.99999,"ShipperName": "ACME","ShippedDate": "2015-02-18T00:00:00","Status": "B"},
{"ProductName": "Canned Beans","Quantity": 3,"ExtendedPrice": 6.85000,"ShipperName": "ACME","ShippedDate": "2015-03-02T00:00:00","Status": "B"}]},
{"name":"Benedetta Fyfield","telephone":"60913-999","phone":"171-47-9184","email":"fjotcham18@theglobeandmail.com","address":"7913 Darwin Hill","state":false ,"productos":[{"ProductName": "Canned Beans","Quantity": 3,"ExtendedPrice": 6.85000,"ShipperName": "ACME","ShippedDate": "2015-03-02T00:00:00","Status": "B"},
{"ProductName": "Salad","Quantity": 2,"ExtendedPrice": 8.8000,"ShipperName": "ACME","ShippedDate": "2015-04-12T00:00:00","Status": "C"}]},
{"name":"Ignaz Breadon","telephone":"52544-940","phone":"324-26-9115","email":"kfullard19@google.co.uk","address":"42469 Hoepker Lane","state":false ,"productos":[{"ProductName": "Salad","Quantity": 2,"ExtendedPrice": 8.8000,"ShipperName": "ACME","ShippedDate": "2015-04-12T00:00:00","Status": "C"},
{"ProductName": "Bread", "Quantity": 1,"ExtendedPrice": 2.71212,"ShipperName": "Fun Inc.","ShippedDate": "2015-01-27T00:00:00","Status": "A"}]},
{"name":"Uri Botly","telephone":"66758-130","phone":"166-54-9948","email":"hagus1a@cocolog-nifty.com","address":"27 Gale Plaza","state":true ,"productos":[{"ProductName": "Salad","Quantity": 2,"ExtendedPrice": 8.8000,"ShipperName": "ACME","ShippedDate": "2015-04-12T00:00:00","Status": "C"},
{"ProductName": "Bread", "Quantity": 1,"ExtendedPrice": 2.71212,"ShipperName": "Fun Inc.","ShippedDate": "2015-01-27T00:00:00","Status": "A"}]}]


                        };
            var oModel = new sap.ui.model.json.JSONModel(oData);
			oModel.setSizeLimit(10000);
			this.setModel(oModel);
		}
	});
});
