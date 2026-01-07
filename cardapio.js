const sabores = [
    { n: "Mussarela Especial", d: "Molho, Mussarela, Tomate Seco, Parmesão e Pimenta Calabresa", g: 43, b: 33 },
    { n: "Mussarela", d: "Molho, Mussarela, Tomate, Azeitona e Orégano", g: 39, b: 29 },
    { n: "Mussapy", d: "Molho, Mussarela, Tomate, Catupiry, orégano e azeitona", g: 45, b: 35 },
    { n: "Calabresa 1", d: "Molho, Calabresa, Cebola, Azeitona e Orégano", g: 39, b: 29 },
    { n: "Calabresa 2", d: "Molho, Mussarela, calabresa, Cebola, Azeitona e Orégano", g: 44, b: 34 },
    { n: "Calabresa 3", d: "Molho, Calabresa, Pimentão, parmesão, Azeitona e Orégano", g: 43, b: 33 },
    { n: "Calapy", d: "Molho, Catupiry, Calabresa, Cebola, Azeitona e Orégano", g: 44, b: 34 },
    { n: "Cabrovo pepe", d: "Molho, Calabresa, Ovo, Cebola, Parmesão, Pimenta Calabresa, Azeitona e Orégano", g: 45, b: 35 },
    { n: "Baiana", d: "Molho, Mussarela, calabresa desfiada, cebola, ovo, pimenta calabresa, azeitona e Orégano", g: 47, b: 37 },
    { n: "Quatro Queijos", d: "Molho, Mussarela, Parmesão, Provolone e Gorgonzola", g: 48, b: 38 },
    { n: "Cinco Queijos", d: "Molho, Mussarela, Parmesão, Provolone, Gorgonzola e Catupiry", g: 50, b: 40 },
    { n: "Abobrinha 1", d: "Molho, Mussarela, Abobrinha, Alho Frito e Orégano", g: 41, b: 31 },
    { n: "Abobrinha 2", d: "Molho, Mussarela, Abobrinha, Pimenta Calabresa e Orégano", g: 41, b: 31 },
    { n: "Alho", d: "Molho, Mussarela e Alho frito", g: 45, b: 35 },
    { n: "Aliche", d: "Molho, Mussarela, Aliche e Tomate", g: 49, b: 39 },
    { n: "Americana", d: "Molho, Mussarela, Lombinho, Pimentão, Champignon e Tomate cereja", g: 50, b: 40 },
    { n: "Atum 1", d: "Molho, Atum e Cebola", g: 46, b: 36 },
    { n: "Atum 2", d: "Molho, Mussarela, Atum e Cebola", g: 48, b: 38 },
    { n: "Bacon", d: "Molho, Mussarela e Bacon", g: 45, b: 35 },
    { n: "Frango Catupiry", d: "Molho, Frango e Catupiry", g: 47, b: 37 },
    { n: "Gênova", d: "Molho, Mussarela, Provolone, Presunto e Molho Pesto", g: 48, b: 38 },
    { n: "Lombinho", d: "Molho, Mussarela, Lombinho e Provolone", g: 47, b: 37 },
    { n: "Peperonni 1", d: "Molho, Mussarela, Peperonni e azeitona", g: 50, b: 40 },
    { n: "Peperonni 2", d: "Molho, Mussarela, Peperonni, Catupiry, azeitona", g: 55, b: 45, novo: true },
    { n: "Romana", d: "Molho, Mussarela, Aliche e Tomate", g: 50, b: 40 },
    { n: "Rústica", d: "Molho, Mussarela, Parmesão, sobre molho, orégano e azeitona", g: 43, b: 33 },
    { n: "Brócolis", d: "Molho, Brócolis, Mussarela, Bacon, azeitona e orégano", g: 48, b: 38 },
    { n: "Brócolis 2", d: "Molho, Brócolis, Mussarela, alho, Bacon, azeitona e orégano", g: 49, b: 39 },
    { n: "Libanese", d: "Molho, Mussarela, Zatar (tempero árabe), Tomate e azeitona", g: 41, b: 31, novo: true },
    { n: "Banana", d: "Banana, Açúcar, Doce de leite e Canela", g: 41, b: 31 },
    { n: "Anita e Garibaldi", d: "Parmesão, Mussarela e Goiabada", g: 45, b: 35 },
    { n: "Ovomaltine", d: "Ovomaltine, ovomaltine Rocks", g: 55, b: 45, novo: true },
    { n: "Marguerita", d: "Molho, Mussarela, Parmesão Tomate, Manjericão Azeitona e Orégano", g: 41, b: 31 },
    { n: "Marguerita Pesto", d: "Molho, Mussarela, Parmesão Tomate, Molho Pesto Azeitona e Orégano", g: 42, b: 31, novo: true },
    { n: "Marguedôro", d: "Molho, Mussarela, Parmesão, Tomate, manjericão, Azeitona, alho e Orégano", g: 42, b: 32, novo: true },
    { n: "Palmitôsa", d: "Molho, Mussarela, Palmito, Catupiry, Azeitona e Orégano", g: 50, b: 40 },
    { n: "Portuguesa", d: "Molho, Mussarela, presunto, ovo, ervilha, tomate, cebola e azeitona", g: 50, b: 40 },
    { n: "Rúcula", d: "Molho, Mussarela, Rúcula e Tomate Seco", g: 47, b: 37 },
    { n: "Toscana", d: "Molho, Mussarela, Linguiça calabresa moída e Tomate", g: 45, b: 35 }
];

const bebidas = [
    { n: "Coca-Cola 2L", d: "Refrigerante", p: 18 },
    { n: "Coca-Cola Zero 2L", d: "Refrigerante", p: 18 },
    { n: "Guaraná Kuat 2L", d: "Refrigerante", p: 12 },
    { n: "HEINEKEN (Lata)", d: "Cerveja", p: 10 }
];

let catAtual = 'pizza';
let modoMeia = false;
let meiaLista = [];
let contador = 0;

// --- LÓGICA DE HORÁRIO ---
function estaAberto() {
    const agora = new Date();
    const hora = agora.getHours();
    const dia = agora.getDay(); 
    // Aberto das 18:00 às 23:30. Fecha na Segunda (dia 1).
    if (dia === 1) return false;
    const minutos = agora.getMinutes();
    const totalMinutos = (hora * 60) + minutos;
    const abertura = 18 * 60;
    const fechamento = (23 * 60) + 30;
    return (totalMinutos >= abertura && totalMinutos <= fechamento);
}

function selecionar(c) {
    catAtual = c;
    document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btn-' + c);
    if(btn) btn.classList.add('active');
    
    const subnav = document.getElementById('subnav');
    if(subnav) subnav.style.display = (c === 'calzone' || c === 'bebidas') ? 'none' : 'flex';
    
    mostrar('inteira');
}

function mostrar(tipo) {
    modoMeia = (tipo === 'meia');
    const btnInt = document.getElementById('btn-inteira');
    const btnMeia = document.getElementById('btn-meia');
    if(btnInt) btnInt.classList.toggle('active', tipo === 'inteira');
    if(btnMeia) btnMeia.classList.toggle('active', tipo === 'meia');
    
    const container = document.getElementById('sabores');
    if(!container) return;
    container.innerHTML = '';
    
    const lista = (catAtual === 'bebidas') ? bebidas : sabores;

    lista.forEach(s => {
        let preco = (catAtual === 'bebidas') ? s.p : (catAtual === 'pizza' ? s.g : s.b);
        let tagNovo = s.novo ? `<span class="tag-novo">NOVIDADE</span>` : '';
        
        container.innerHTML += `
            <div class="item-card">
                ${tagNovo}
                <h3>${s.n}</h3>
                <p>${s.d}</p>
                <div class="price-row">
                    <span style="font-weight:900; font-size:1.5rem">R$ ${preco.toFixed(2)}</span>
                    <button class="btn-add" onclick="adicionar('${s.n}', ${preco})">ADICIONAR</button>
                </div>
            </div>`;
    });
}

function adicionar(n, p) {
    const cart = document.getElementById('pedido');
    if(!cart) return;

    if(modoMeia) {
        meiaLista.push({n, p});
        showCustomAlert("METADE 1/2", `Sabor: ${n}. Escolha agora a segunda metade.`);
        if(meiaLista.length === 2) {
            let finalP = Math.max(meiaLista[0].p, meiaLista[1].p);
            let label = catAtual === 'pizza' ? "Pizza 1/2" : "Broto 1/2";
            cart.value += `${label}: ${meiaLista[0].n} / ${meiaLista[1].n} - R$ ${finalP.toFixed(2)}\n`;
            meiaLista = [];
            finalizar();
            verificarSugestaoCombo();
        }
    } else {
        let label = catAtual === 'bebidas' ? "Bebida" : (catAtual === 'pizza' ? "Pizza" : (catAtual === 'broto' ? "Broto" : "Calzone"));
        cart.value += `${label}: ${n} - R$ ${p.toFixed(2)}\n`;
        finalizar();
        showCustomAlert("ADICIONADO", n + " foi para o seu carrinho!");
        if (catAtual !== 'bebidas') verificarSugestaoCombo();
    }
}

function verificarSugestaoCombo() {
    const pedidoTexto = document.getElementById('pedido').value;
    const temPizza = pedidoTexto.includes("Pizza") || pedidoTexto.includes("Broto");
    const temBebida = pedidoTexto.includes("Bebida");

    if (temPizza && !temBebida) {
        setTimeout(() => {
            if(confirm("Que tal uma bebida gelada para acompanhar seu pedido?")) {
                selecionar('bebidas');
                const carrinho = document.getElementById('carrinho');
                if(carrinho) carrinho.classList.remove('open');
            }
        }, 1000);
    }
}

function limparPedido() {
    if(confirm("Deseja remover todos os itens do carrinho?")) {
        const cart = document.getElementById('pedido');
        if(cart) cart.value = "";
        contador = 0;
        const count = document.getElementById('cart-count');
        if(count) count.innerText = "0";
    }
}

function finalizar() { 
    contador++; 
    const count = document.getElementById('cart-count');
    if(count) count.innerText = contador; 
}

function toggleCarrinho() { 
    const carrinho = document.getElementById('carrinho');
    if(carrinho) carrinho.classList.toggle('open'); 
}

function mostrarDados(t) {
    const detalhes = document.getElementById('pedidoDetalhes');
    const campos = document.getElementById('entregaCampos');
    if(detalhes) detalhes.style.display = 'block';
    if(campos) campos.style.display = (t === 'delivery') ? 'block' : 'none';
    
    const btnRet = document.getElementById('btn-retirar');
    const btnDel = document.getElementById('btn-delivery');
    if(btnRet) btnRet.classList.toggle('active', t === 'retirar');
    if(btnDel) btnDel.classList.toggle('active', t === 'delivery');
}

function mostrarTroco() { 
    const area = document.getElementById('trocoArea');
    const pag = document.getElementById('pagamento');
    if(area && pag) area.style.display = (pag.value === 'Dinheiro') ? 'block' : 'none'; 
}

function enviarPedido() {
    if (!estaAberto()) {
        showCustomAlert("FECHADO", "Nosso horário de atendimento é das 18:00 às 23:30. Você pode montar seu pedido, mas o envio será processado ao abrirmos!");
    }

    const itens = document.getElementById('pedido').value;
    const pag = document.getElementById('pagamento').value;
    
    if(!itens.trim()) return showCustomAlert("CARRINHO VAZIO", "Adicione itens antes de finalizar.");
    if(!pag) return showCustomAlert("PAGAMENTO", "Selecione a forma de pagamento.");

    const entregaVisivel = document.getElementById('entregaCampos').style.display === 'block';
    let local = entregaVisivel 
        ? `*Delivery:* ${document.getElementById('endereco').value} - ${document.getElementById('bairro').value}` 
        : "*Retirada no Balcão*";

    let troco = "";
    const trocoArea = document.getElementById('trocoArea');
    if(trocoArea && trocoArea.style.display === 'block') {
        troco = `\n*Troco para:* R$ ${document.getElementById('valorTroco').value}`;
    }

    const mensagem = encodeURIComponent(`*NOVO PEDIDO VITORELLI*\n\n${itens}\n📍 ${local}\n💳 *Pagamento:* ${pag}${troco}`);
    window.open(`https://wa.me/5511993407322?text=${mensagem}`);
}

function showCustomAlert(t, m) { 
    const title = document.getElementById('custom-alert-title');
    const msg = document.getElementById('custom-alert-message');
    const overlay = document.getElementById('custom-alert-overlay');
    if(title) title.innerText = t; 
    if(msg) msg.innerText = m; 
    if(overlay) overlay.style.display = 'flex'; 
}

function hideCustomAlert() { 
    const overlay = document.getElementById('custom-alert-overlay');
    if(overlay) overlay.style.display = 'none'; 
}

// Inicia o cardápio
document.addEventListener('DOMContentLoaded', () => {
    selecionar('pizza');
});
