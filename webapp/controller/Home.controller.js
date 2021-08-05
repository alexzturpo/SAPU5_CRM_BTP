sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("salescloud.controller.Home", {
			onInit: function () {

            },
            //  saltos de paneles 
                //navegador de clientes
            tohome: function(){
                this.getSplitContObj().to(this.createId("HomeDetail"));
            },
            tocuentas: function(){
                this.getSplitContObj().to(this.createId("CuentasDetail"));
            },
                tocuentasdata: function(){
                    this.getSplitContObj().to(this.createId("DataCuentasDetail"));
                },
            tocontactos: function(){
                this.getSplitContObj().to(this.createId("ContactosDetail"));
            },
            toclientes: function(){
                this.getSplitContObj().to(this.createId("ClientesDetail"));
            },
            togrupoobjs: function(){
                this.getSplitContObj().to(this.createId("GruposObjetivosDetail"));
            },
                    todatagrupoobjs: function(){
                        this.getSplitContObj().to(this.createId("DataGruposObjetivosDetail"));
                    },
            // navegador de personas
            toempleados: function(){
                this.getSplitContObj().to(this.createId("EmpleadosDetail"));
            },
            tosocionegocio: function(){
                this.getSplitContObj().to(this.createId("SocioNegocioDetail"));
            },
            // navegador de Campañas de venta
            tocampania: function(){
                this.getSplitContObj().to(this.createId("CampaniaDetail"));
            },
            togestioncontenido: function(){
                this.getSplitContObj().to(this.createId("GestionContenidoDetail"));
            },
            // navegador de Ventas
            toleads: function(){
                this.getSplitContObj().to(this.createId("LeadsDetail"));
            },
            tooportunidades: function(){
                this.getSplitContObj().to(this.createId("OportunidadesDetail"));
            },
            toforescasts: function(){
                this.getSplitContObj().to(this.createId("ForecastsDetail"));
            },
            topedidos: function(){
                this.getSplitContObj().to(this.createId("TomaPedidosDetail"));
            },
            tolistaprecios: function(){
                this.getSplitContObj().to(this.createId("ListaPreciosDetail"));
            },
                todatalistaprecios: function(){
                    this.getSplitContObj().to(this.createId("DataListaPreciosDetail"));
                },
            // navegador de Actividades
            toreuniones: function(){
                this.getSplitContObj().to(this.createId("ReunionesDetail"));
            },
            tollamadas: function(){
                this.getSplitContObj().to(this.createId("LlamadasDetail"));
            },
            totareas: function(){
                this.getSplitContObj().to(this.createId("TareasDetail"));
            },
            toactividades: function(){
                this.getSplitContObj().to(this.createId("ActividadesDetail"));
            },
            toplanvisitas: function(){
                this.getSplitContObj().to(this.createId("VistasDetail"));
            },
                todataplanvisitas: function(){
                    this.getSplitContObj().to(this.createId("DataVistasDetail"));
                },
            torecordatorios: function(){
                this.getSplitContObj().to(this.createId("RecordatoriosDetail"));
            },
            ///// navegador Dashboards
            torutasvendedor: function(){
                this.getSplitContObj().to(this.createId("RutasVendedorDetail"));
            },
            tomonitoreocampo: function(){
                this.getSplitContObj().to(this.createId("MonitoreoCampoDetail"));
            },
            tovistaentidades: function(){
                this.getSplitContObj().to(this.createId("VistaEntidadesDetail"));
            },
            ///// navegador Reportes
            toreportes: function(){
                this.getSplitContObj().to(this.createId("ReportesDetail"));
            },
            tohaciendaacciones: function(){
                this.getSplitContObj().to(this.createId("HaciendaAccionesDetail"));
            },
            toestadistica: function(){
                this.getSplitContObj().to(this.createId("EstadisticaDetail"));
            },
            tovisualizacion: function(){
                this.getSplitContObj().to(this.createId("VisualizacionDetail"));
            },
            getSplitContObj: function () {
			var result = this.byId("SplitContDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		    }
		});
	});