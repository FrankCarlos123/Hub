function generarEtiqueta() {
    const nombre = document.getElementById('nombre-input').value;
    const codigoBarras = document.getElementById('codigo-barras-input').value;
    const etiqueta = document.getElementById('etiqueta');
    const nombreProducto = document.getElementById('nombre-producto');
    const imagenBarcode = document.getElementById('imagen-barcode');

    if (nombre && codigoBarras) {
        nombreProducto.textContent = nombre;
        imagenBarcode.src = `https://barcode.tec-it.com/barcode.ashx?data=${codigoBarras}&code=Code128&dpi=96`;
        etiqueta.style.display = 'block';
    }
}

function imprimirEtiqueta() {
    const cantidad = parseInt(document.getElementById('cantidad-imprimir-etiqueta').value);
    if (!isNaN(cantidad) && cantidad > 0) {
        const etiqueta = document.getElementById('etiqueta');
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Imprimir Etiqueta</title>');
        printWindow.document.write('<style>@media print { body { margin: 0; } .print-page { page-break-after: always; } .print-page.barcode { display: flex; justify-content: center; align-items: center; height: 90vh; } .etiqueta { text-align: center; } }</style>');
        printWindow.document.write('</head><body>');
        for (let i = 0; i < cantidad; i++) {
            printWindow.document.write('<div class="print-page barcode">');
            printWindow.document.write(etiqueta.outerHTML);
            printWindow.document.write('</div>');
        }
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    }
}

function imprimirImagen(imagenSrc, inputId) {
    const cantidad = parseInt(document.getElementById(inputId).value);
    if (!isNaN(cantidad) && cantidad > 0) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Imprimir Imagen</title>');
        printWindow.document.write('<style>@media print { body { margin: 0; } .print-page.predefinida { page-break-after: always; display: flex; justify-content: center; align-items: center; height: 90vh; transform: rotate(90deg); } .print-page.predefinida img { max-height: 90vw; width: auto; } }</style>');
        printWindow.document.write('</head><body>');
        for (let i = 0; i < cantidad; i++) {
            printWindow.document.write('<div class="print-page predefinida">');
            printWindow.document.write(`<img src="${imagenSrc}" alt="Etiqueta">`);
            printWindow.document.write('</div>');
        }
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    }
}