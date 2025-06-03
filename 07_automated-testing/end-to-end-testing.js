// Test de End-to-End para formulario de contacto usando Playwright
const { test, expect } = require('@playwright/test');

test('Test de formulario de contacto', async ({ page }) => {
    // Abrir la página de inicio
    await page.goto('https://ejemplo.com');
    console.log('Página de inicio cargada');

    // Llenar el formulario de contacto
    await page.click('#contact-link');
    console.log('Formulario de contacto abierto');

    // Esperar a que el formulario esté visible
    await page.waitForSelector('#contact-form');
    
    // Llenar campos
    await page.fill('#nombre', 'Juan Perez');
    await page.fill('#email', 'juan@example.com');
    await page.fill('#telefono', '123456789');
    await page.selectOption('#asunto', 'Soporte');
    await page.fill('#mensaje', 'Este es un mensaje de prueba para el formulario de contacto');
    console.log('Campos del formulario completados');

    // Enviar los datos
    await page.click('#enviar-btn');
    console.log('Formulario enviado');

    // Verificar mensaje de confirmación
    await page.waitForSelector('.confirmacion');
    const mensajeConfirmacion = await page.textContent('.confirmacion');
    expect(mensajeConfirmacion).toContain('Gracias por contactarnos');
    console.log('Mensaje de confirmación recibido');
    
    // Hacer una captura de pantalla
    await page.screenshot({ path: 'formulario-enviado.png' });
    console.log('Captura de pantalla guardada');
});