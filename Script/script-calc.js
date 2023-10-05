
function calcular(){
    var nom,t_doc,n_doc,correo,tel,tur1,tur2,tur3,tur4,tur5,desc,transporte,des1,sal;
    var trans=0,v_trun1=10000,v_trun2=15000,v_trun3=20000,v_trun4=25000,v_trun5=30000,v_desc=10000;

    nom = document.getElementById('nombre').value;
    t_doc = document.getElementById('tp_documento').value;
    n_doc = document.getElementById('n_documento').value;
    correo = document.getElementById('correo').value;
    tel = document.getElementById('telefono').value;
    tur1 = parseInt(document.getElementById('turno1').value) || 0;
    tur2 = parseInt(document.getElementById('turno2').value) || 0;
    tur3 = parseInt(document.getElementById('turno3').value) || 0;
    tur4 = parseInt(document.getElementById('turno4').value) || 0;
    tur5 = parseInt(document.getElementById('turno5').value) || 0;
    desc = parseInt(document.getElementById('descanso').value) || 0;
    transporte = parseInt(document.getElementById('transporte').value)||0;
    des1 = parseInt(document.getElementById('o_desc').value) || 0;
    
    switch(transporte){
        case 1: 
            trans = 50000;
            break;
        case 2:
            trans = 100000;
            break;
    }
    
    var totingreso = tur1 * v_trun1 + tur2 * v_trun2 + tur3 * v_trun3 + tur4 * v_trun4 + tur5 * v_trun5 + desc * v_desc + trans;
    sal= (totingreso * 0.04)*2;
    var totdescuento = sal+des1;
    var neto = totingreso - totdescuento;

    

    document.getElementById('transporteValue').value = trans;
    document.getElementById('tot_ingreso').value = totingreso;
    document.getElementById('salud').value = sal;
    document.getElementById('tot_descuento').value = totdescuento;
    document.getElementById('resultado').value = neto;
    
}

function limpiar() {
    document.getElementById('nombre').value = "";
    document.getElementById('tp_documento').selectedIndex = 0; // Restaura la selección al primer elemento
    document.getElementById('n_documento').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('turno1').value = "";
    document.getElementById('turno2').value = "";
    document.getElementById('turno3').value = "";
    document.getElementById('turno4').value = "";
    document.getElementById('turno5').value = "";
    document.getElementById('descanso').value = "";
    document.getElementById('transporte').selectedIndex = 0; // Restaura la selección al primer elemento
    document.getElementById('transporteValue').value = "";
    document.getElementById('tot_ingreso').value = "";
    document.getElementById('salud').value = "";
    document.getElementById('o_desc').value = "";
    document.getElementById('tot_descuento').value = "";
    document.getElementById('resultado').value = "";
}

function generar() {
    var nom="",t_doc="",n_doc=0,correo="",tel=0,tur1=0,tur2=0,tur3=0,tur4=0,tur5=0,desc=0,transporte=0,des1=0,sal=0;
    var trans=0,v_trun1=10000,v_trun2=15000,v_trun3=20000,v_trun4=25000,v_trun5=30000,v_desc=10000;
    var descanso=0,valor1=0,valor2=0,valor3=0,valor4=0,valor5=0,subTotal=0,pen=0,totdescuento=0,neto1=0;

    nom = document.getElementById('nombre').value;
    t_doc = document.getElementById('tp_documento').value;
    n_doc = document.getElementById('n_documento').value;
    correo = document.getElementById('correo').value;
    tel = document.getElementById('telefono').value;
    tur1 = parseInt(document.getElementById('turno1').value) || 0;
    tur2 = parseInt(document.getElementById('turno2').value) || 0;
    tur3 = parseInt(document.getElementById('turno3').value) || 0;
    tur4 = parseInt(document.getElementById('turno4').value) || 0;
    tur5 = parseInt(document.getElementById('turno5').value) || 0;
    desc = parseInt(document.getElementById('descanso').value) || 0;
    transporte = parseInt(document.getElementById('transporte').value)||0;
    des1 = parseInt(document.getElementById('o_desc').value) || 0;
    
    switch(transporte){
        case 1: 
            trans = 50000;
            break;
        case 2:
            trans = 100000;
        break;
    }
    
    valor1 = tur1 * v_trun1;
    valor2 = tur2 * v_trun2;
    valor3 = tur3 * v_trun3;
    valor4 = tur4 * v_trun4;
    valor5 = tur5 * v_trun5;
    descanso = desc * v_desc;

    subTotal=valor1+valor2+valor3+valor4+valor5+descanso+trans;
    sal= subTotal*0.04;
    pen=sal;
    totdescuento=sal+pen+des1;
    neto1=subTotal-totdescuento;
    
    
    alert('----------------------------------------------------------------------------' + '\n'
    + '                                   INFORMACION' + '\n'
    + '----------------------------------------------------------------------------' + '\n'
    + 'Nombre:    ' + nom + '\n'
    + t_doc + ':  ' + n_doc + '\n'
    + 'Correo: '    + correo  + '\n'
    + 'Telefono:  ' + tel   + '\n'
    + '----------------------------------------------------------------------------' + '\n'
    + '                            CALCULO DE TURNOS' + '\n'
    + '----------------------------------------------------------------------------' + '\n'
    + 'Turno 1:            ' + valor1      + '\n'
    + 'Turno 2:            ' + valor2      + '\n'
    + 'Turno 3:            ' + valor3      + '\n'
    + 'Turno 4:            ' + valor4      + '\n'
    + 'Turno 5:            ' + valor5      + '\n'
    + 'Descanso:           ' + descanso    + '\n'
    + 'Aux. Transporte:    ' + trans       + '\n'
    + 'Subtotal:           ' + subTotal    + '\n'
    + 'Salud:              ' + sal         + '\n'
    + 'Pension:            ' + pen         + '\n'
    + 'Total Descuentos:   ' + totdescuento+ '\n'
    + 'Valor Neto:         ' + neto1       + '\n'

    );

}