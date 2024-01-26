function Conta(numero, titular, saldo) {
    let _numero = numero;
    let _titular = titular;
    let _saldo = saldo;

    this.getNumero = () => _numero;

    this.getTitular = () => _titular;

    this.getSaldo = () => _saldo;

    this.sacar = valor => {
        if (valor <= _saldo) {
            _saldo -= valor;
        }
    };

    this.depositar = valor => {
        if (valor > 0) {
            _saldo += valor;
        }
    };
}

function ContaCorrente(numero, titular, saldo, limite) {
    let _limite = limite;

    Conta.call(this, numero, titular, saldo);

    this.getLimite = () => _limite;

    this.setLimite = valor => {
        if (valor > 0) {
            _limite = valor;
        }
    };
}

function ContaPoupanca(numero, titular, saldo) {
    Conta.call(this, numero, titular, saldo);

    this.renderJuros = () => {
        this.depositar(this.getSaldo() * 0.01);
    };
}

const conta1 = new ContaCorrente(1, 'João', 100, 200);
const conta2 = new ContaPoupanca(2, 'Maria', 200);
const conta3 = new ContaCorrente(3, 'Pedro', 300, 400);
