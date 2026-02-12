const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function executarSimuladoSAEP() {
    // Configurações do Chrome
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--disable-gpu');

    let driver;

    try {
        // 1. Inicializar o driver
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        // Aguardar carregamento de elementos
        driver.manage().setTimeouts({ implicit: 5000 });

        // 2. Abrir a página de login
        const loginPath = `file:///${process.cwd().replace(/\\/g, '/')}/login.html`;
        console.log(`📂 Abrindo: ${loginPath}`);
        await driver.get(loginPath);

        // Aguardar a página carregar
        await driver.wait(until.elementLocated(By.id('cpf')), 10000);
        console.log('✅ Página de login carregada\n');

        // 3. Preencher e submeter login
        console.log('🔐 Realizando login...');
        const cpfInput = await driver.findElement(By.id('cpf'));
        const senhaInput = await driver.findElement(By.id('senha'));
        const botaoLogin = await driver.findElement(By.css('button.btn-primary'));

        await cpfInput.clear();
        await cpfInput.sendKeys('123.456.789-00');
        
        await senhaInput.clear();
        await senhaInput.sendKeys('Senha123');
        
        await botaoLogin.click();
        console.log('✅ Login enviado\n');

        // Aguardar redirecionamento para questão 1
        await driver.wait(until.elementLocated(By.className('question-card')), 10000);
        console.log('✅ Primeira questão carregada\n');

        // 4. Loop para responder as 10 questões
        for (let i = 1; i <= 10; i++) {
            try {
                console.log(`📝 Respondendo Questão ${i} de 10...`);

                // Aguardar o card da questão
                await driver.wait(until.elementLocated(By.className('question-card')), 5000);

                // Aguardar um pouco para animações
                await driver.sleep(500);

                // Encontrar todos os radio buttons (opções)
                const opcoes = await driver.findElements(By.css('input[type="radio"]'));
                
                if (opcoes.length === 0) {
                    console.warn(`⚠️  Nenhuma opção encontrada na questão ${i}`);
                    continue;
                }

                // Selecionar opção B (índice 1)
                const opcaoSelecionada = opcoes[1];
                await driver.executeScript('arguments[0].click();', opcaoSelecionada);
                console.log(`✓ Opção B selecionada`);

                // Aguardar um pouco
                await driver.sleep(500);

                // Encontrar o botão de ação (Avançar/Finalizar)
                const botoes = await driver.findElements(By.css('button.btn-primary'));
                
                if (botoes.length === 0) {
                    console.warn(`⚠️  Botão não encontrado na questão ${i}`);
                    continue;
                }

                // Clicar no último botão primário (Avançar/Finalizar)
                const botaoAcao = botoes[botoes.length - 1];
                await driver.executeScript('arguments[0].click();', botaoAcao);
                console.log(`✓ Avançando para próxima questão\n`);

                // Aguardar transição
                await driver.sleep(1000);

            } catch (error) {
                console.error(`❌ Erro na questão ${i}:`, error.message);
                throw error;
            }
        }

        // 5. Validar página de resultado
        console.log('🎯 Validando página de resultado...\n');
        
        await driver.wait(until.elementLocated(By.css('h2')), 10000);
        
        const h2Resultado = await driver.findElement(By.css('h2')).getText();
        
        if (h2Resultado.includes('Avaliação Concluída') || h2Resultado.includes('Concluída')) {
            console.log('✅ SUCESSO: Chegou à tela de resultado!');
            console.log(`📋 Título: ${h2Resultado}\n`);

            // Capturar informações do resultado
            try {
                const nome = await driver.findElement(By.id('resNome')).getText();
                const cpf = await driver.findElement(By.id('resCpf')).getText();
                const acertos = await driver.findElement(By.id('resAcertos')).getText();
                const tempo = await driver.findElement(By.id('resTempo')).getText();

                console.log('📊 RESULTADO FINAL:');
                console.log(`   Nome: ${nome}`);
                console.log(`   CPF: ${cpf}`);
                console.log(`   Acertos: ${acertos}`);
                console.log(`   Tempo: ${tempo}`);
            } catch (error) {
                console.warn('⚠️  Não foi possível capturar todos os dados do resultado');
            }

            console.log('\n✅ TESTE CONCLUÍDO COM SUCESSO!\n');

        } else {
            console.error(`❌ Página inesperada. H2 encontrado: "${h2Resultado}"`);
        }

        // Tirar screenshot final
        const screenshot = await driver.takeScreenshot();
        const fs = require('fs');
        fs.writeFileSync('./screenshot-resultado.png', screenshot, 'base64');
        console.log('📸 Screenshot salvo em: screenshot-resultado.png\n');

        // Aguardar 3 segundos para observação
        await driver.sleep(3000);

    } catch (error) {
        console.error('\n❌ ERRO DURANTE O TESTE:', error.message);
        console.error(error.stack);
        
        // Tirar screenshot do erro
        try {
            const fs = require('fs');
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('./screenshot-erro.png', screenshot, 'base64');
            console.log('\n📸 Screenshot do erro salvo em: screenshot-erro.png');
        } catch (e) {
            console.log('Não foi possível tirar screenshot do erro');
        }

    } finally {
        // Fechar o navegador
        if (driver) {
            await driver.quit();
            console.log('\n🔒 Navegador fechado');
        }
    }
}

// Executar o teste
executarSimuladoSAEP().catch(console.error);