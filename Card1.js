// CONFIGURAÇÕES INICIAIS E SABORES (Exemplo com alguns, adicione os 49 aqui)
const sabores = [
    { n: "Mussarela Especial", d: "Molho, Mussarela, Tomate Seco, Parmesão e Pimenta Calabresa", g: 43, b: 33 },
    { n: "Mussarela", d: "Molho, Mussarela, Tomate, Azeitona e Orégano", g: 39, b: 29 },
    { n: "Calabresa 1", d: "Molho, Calabresa, Cebola, Azeitona e Orégano", g: 39, b: 29 },
    { n: "Frango com Catupiry", d: "Molho, Frango desfiado, Catupiry e Orégano", g: 45, b: 35 }
    // ... adicione os outros 45 sabores seguindo este padrão
];

const extrasLista = [
    { n: "Bacon", pM: 5, pI: 8 },
    { n: "Catupiry", pM: 6, pI: 10 },
    { n: "Mussarela", pM: 4, pI: 8 },
    { n: "Tomate Seco", pM: 5, pI: 8 },
    { n: "Ovo", pM: 3, pI: 5 },
    { n: "Cebola", pM: 3, pI: 5 }
    // Adicione os demais da tabela que você enviou
];

let carrinho = [];
let selecaoMeia = [];
let categoriaAtual = 'pizza';
let modoAtual = 'inteira';

// INICIALIZAÇÃO
window.onload = () => {
    verificarStatusLoja();
    selecionar('pizza');
};

function verificarStatusLoja() {
    const agora = new Date();
    const hora = agora.getHours();
    const status = document.getElementById('status-loja');
    if (hora >= 18 && hora <= 23) {
        status.innerText = "● ABERTO AGORA";
        status.className = "status-badge aberto";
    } else {
        status.innerText = "● FECHADO (Abre às 18h)";
        status.className = "status-badge fechado";
    }
}

// NAVEGAÇÃO
function selecionar(cat) {
    categoriaAtual = cat;
    document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${cat}`).classList.add('active');
    document.getElementById('subnav').style.display = (cat === 'pizza' || cat === 'broto') ? 'flex' : 'none';
    mostrar(modoAtual);
}

function mostrar(modo) {
    modoAtual = modo;
    selecaoMeia = [];
    document.querySelectorAll('.subnav button').forEach(b => b.classList.remove('active'));
    if(document.getElementById(`btn-${modo}`)) document.getElementById(`btn-${modo}`).classList.add('active');
    
    const container = document.getElementById('sabores');
    container.innerHTML = "";

    sabores.forEach((s, index) => {
        const preco = categoriaAtual === 'pizza' ? s.g : s.b;
        const card = document.createElement('div');
        card.className = 'card-item';
        card.innerHTML = `
            <h3>${s.n}</h3>
            <p>${s.d}</p>
            <span class="price-tag">R$ ${preco.toFixed(2)}</span>
            <button class="btn-alert" style="margin-top:10px" onclick="adicionarAoPedido(${index})">ADICIONAR</button>
        `;
        container.appendChild(card);
    });
}

// LÓGICA DE ADIÇÃO
function adicionarAoPedido(index) {
    const sabor = sabores[index];
    const preco = categoriaAtual === 'pizza' ? sabor.g : sabor.b;

    if (modoAtual === 'meia') {
        selecaoMeia.push({ ...sabor, preco });
        if (selecaoMeia.length === 1) {
            showCustomAlert("METADE 1/2", `Sabor: ${sabor.n}. Escolha agora a segunda metade.`);
        } else {
            const precoFinal = Math.max(selecaoMeia[0].preco, selecaoMeia[1].preco);
            const novoItem = {
                nome: `${selecaoMeia[0].n} / ${selecaoMeia[1].n}`,
                preco: precoFinal,
                tipo: categoriaAtual,
                detalhes: [selecaoMeia[0].n, selecaoMeia[1].n],
                extras: []
            };
            showCustomAlert("METADE 2/2", `Sabor: ${novoItem.nome} adicionado!`);
            abrirModalExtras(novoItem);
            selecaoMeia = [];
        }
    } else {
        const novoItem = {
            nome: sabor.n,
            preco: preco,
            tipo: categoriaAtual,
            detalhes: [sabor.n],
            extras: []
        };
        abrirModalExtras(novoItem);
    }
}

// EXTRAS
let itemSendoEditado = null;

function abrirModalExtras(item) {
    itemSendoEditado = item;
    const modal = document.getElementById('modal-extras');
    const container = document.getElementById('lista-extras-container');
    document.getElementById('extra-sabor-nome').innerText = item.nome;
    container.innerHTML = "";

    extrasLista.forEach(extra => {
        const btn = document.createElement('div');
        btn.className = 'extra-item-btn';
        btn.innerHTML = `<span>${extra.n}</span> <span>+ R$ ${extra.pI.toFixed(2)}</span>`;
        btn.onclick = () => aplicarExtra(extra);
        container.appendChild(btn);
    });

    modal.style.display = 'flex';
}

function aplicarExtra(extra) {
    let opcao = "";
    if (itemSendoEditado.detalhes.length > 1) {
        const escolha = confirm(`Onde adicionar ${extra.n}?\n[OK] Na Pizza Toda (R$ ${extra.pI})\n[Cancelar] Escolher Metade`);
        if (escolha) {
            itemSendoEditado.extras.push({ n: extra.n, p: extra.pI, loc: "Inteira" });
            itemSendoEditado.preco += extra.pI;
        } else {
            const m = confirm(`Em qual metade?\n[OK] ${itemSendoEditado.detalhes[0]}\n[Cancelar] ${itemSendoEditado.detalhes[1]}`);
            const loc = m ? itemSendoEditado.detalhes[0] : itemSendoEditado.detalhes[1];
            itemSendoEditado.extras.push({ n: extra.n, p: extra.pM, loc: loc });
            itemSendoEditado.preco += extra.pM;
        }
    } else {
        itemSendoEditado.extras.push({ n: extra.n, p: extra.pI, loc: "Inteira" });
        itemSendoEditado.preco += extra.pI;
    }
    alert(`${extra.n} adicionado!`);
}

function fecharExtras() {
    carrinho.push(itemSendoEditado);
    itemSendoEditado = null;
    document.getElementById('modal-extras').style.display = 'none';
    atualizarCarrinho();
}

// CARRINHO
function atualizarCarrinho() {
    const txt = document.getElementById('pedido');
    const count = document.getElementById('cart-count');
    const totalMsg = document.getElementById('total-valor');
    const vazioMsg = document.getElementById('carrinho-vazio-msg');
    
    if (carrinho.length === 0) {
        txt.value = "";
        count.innerText = "0";
        totalMsg.innerText = "R$ 0,00";
        vazioMsg.style.display = "block";
        return;
    }

    vazioMsg.style.display = "none";
    let resumo = "";
    let totalBruto = 0;

    carrinho.forEach((item, i) => {
        resumo += `${i+1}. ${item.tipo.toUpperCase()} ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        item.extras.forEach(e => {
            resumo += `   + Extra: ${e.n} (${e.loc})\n`;
        });
        resumo += `\n`;
        totalBruto += item.preco;
    });

    // Taxa de Entrega
    const bairroSel = document.getElementById('bairro').value;
    const taxa = bairroSel ? parseFloat(bairroSel.split('|')[1]) : 0;
    
    txt.value = resumo;
    count.innerText = carrinho.length;
    totalMsg.innerText = `R$ ${(totalBruto + taxa).toFixed(2)}`;
}

function toggleCarrinho() {
    const car = document.getElementById('carrinho');
    car.classList.toggle('open');
    
    // Upsell de Bebidas
    const temBebida = carrinho.some(i => i.tipo === 'bebidas');
    if (car.classList.contains('open') && carrinho.length > 0 && !temBebida) {
        const upsell = confirm("Que tal uma Coca-Cola gelada para acompanhar?\n[OK] Quero ver bebidas!\n[Cancelar] Não, obrigado.");
        if (upsell) {
            car.classList.remove('open');
            selecionar('bebidas');
        }
    }
}

function limparCarrinho() {
    if(confirm("Deseja limpar todo o carrinho?")) {
        carrinho = [];
        atualizarCarrinho();
    }
}

// ENTREGA E FINALIZAÇÃO
function mostrarDados(t) {
    document.getElementById('pedidoDetalhes').style.display = 'block';
    document.getElementById('entregaCampos').style.display = (t === 'delivery') ? 'block' : 'none';
    document.getElementById('btn-retirar').classList.toggle('active', t === 'retirar');
    document.getElementById('btn-delivery').classList.toggle('active', t === 'delivery');
}

function checkOutroBairro(val) {
    document.getElementById('outroBairroArea').style.display = (val.startsWith('OUTRO')) ? 'block' : 'none';
    atualizarCarrinho();
}

function mostrarTroco() {
    document.getElementById('trocoArea').style.display = (document.getElementById('pagamento').value === 'Dinheiro') ? 'block' : 'none';
}

function enviarPedido() {
    const itens = document.getElementById('pedido').value;
    const pag = document.getElementById('pagamento').value;
    const obs = document.getElementById('observacoes').value;
    const total = document.getElementById('total-valor').innerText;

    if (!itens || !pag) return showCustomAlert("ATENÇÃO", "Adicione itens e escolha o pagamento!");

    let entregaInfo = "";
    if (document.getElementById('entregaCampos').style.display === 'block') {
        const rua = document.getElementById('endereco').value;
        const ref = document.getElementById('referencia').value;
        const bVal = document.getElementById('bairro').value;
        const bairroNome = bVal.startsWith('OUTRO') ? document.getElementById('outroBairroInput').value : bVal.split('|')[0];
        entregaInfo = `🛵 Delivery: ${rua}\n📍 Bairro: ${bairroNome}\n📍 Ref: ${ref}`;
    } else {
        entregaInfo = `📍 Retirada no Balcão`;
    }

    const mensagem = `*NOVO PEDIDO - VITORELLI*\n\n${itens}\n*Observações:* ${obs}\n\n${entregaInfo}\n💰 *Total: ${total}*\n💳 Pagamento: ${pag}`;
    window.open(`https://wa.me/5511993407322?text=${encodeURIComponent(mensagem)}`);
}

// ALERTAS
function showCustomAlert(t, m) {
    document.getElementById('custom-alert-title').innerText = t;
    document.getElementById('custom-alert-message').innerText = m;
    document.getElementById('custom-alert-overlay').style.display = 'flex';
}

function hideCustomAlert() {
    document.getElementById('custom-alert-overlay').style.display = 'none';
}
