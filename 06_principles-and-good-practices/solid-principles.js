class ReportGenerator {
    constructor(data) {
        this.data = data;
        this.formatter = new ReportFormatter();
        this.sender = new ReportSender();
    }

    generateReport() {
        const formattedReport = this.formatter.format(this.data);
        this.sender.send(formattedReport);
        return formattedReport;
    }
}

class ReportFormatter {
    format(data) {
        // Formato básico: convierte el objeto a JSON bien hecho
        try {
            return JSON.stringify(data, null, 2);
        } catch (error) {
            console.error("Error formateando el reporte:", error);
            return "Error en el formato del reporte";
        }
    }
}

class ReportSender {
    send(report) {
        // Simulación de envío (solo lo muestra en consola)
        console.log("=== Reporte Enviado ===");
        console.log(report);
        console.log("=======================");
    }
}

// Ejemplo de uso
const data = {
    title: "Ventas Q1 2023",
    details: {
        total: 15000,
        products: ["Producto A", "Producto B", "Producto C"],
        active: true
    }
};

const reportGenerator = new ReportGenerator(data);
const myReport = reportGenerator.generateReport();