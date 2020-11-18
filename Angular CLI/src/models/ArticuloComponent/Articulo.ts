class Articulo{

    private numero:number;
    private imagen:File;
    private descripcion:string;
    private color:string;
    private talla:number;
    private cantidad:number;
    private rebajado:boolean;
    private precioOriginal:number;
    private precioRebajado:number;

    constructor(numero:number, imagen:File, descripcion:string, color:string, talla:number, cantidad:number, rebajado:boolean, precioOriginal:number, precioRebajado:number){
        this.numero=numero,
        this.imagen=imagen,
        this.descripcion=descripcion,
        this.color=color,
        this.talla=talla,
        this.cantidad=cantidad,
        this.rebajado=rebajado,
        this.precioOriginal=precioOriginal,
        this.precioRebajado=precioRebajado
    }

}