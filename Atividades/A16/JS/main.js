const modal = {
    open() {
        /* Abrir modal */
        /* Adicionar a class active no modal */
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        /* Fechar modal */
        /* remover a class active do modal */
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const storage = {
    get() {
        return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
    },

    set(transactions) {
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
    }
}

const transaction = {
    all: storage.get(),

    add(trs) {
        transaction.all.push(trs)

        app.reload()
    },

    remove(index) {
        transaction.all.splice(index, 1)

        app.reload()
    },

    incomes() {
        let income = 0;

        transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })

        return income;
    },
    expenses() {
        let expense = 0;

        transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })

        return expense;
    },
    total() {
        return transaction.incomes() + transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transactions, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transactions)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transactions, index) {
        const CSSclass = transactions.amount > 0 ? "income" : "expense"

        const amount = utils.formatCurrency(transactions.amount)

        const html = `
        <td class="description">${transactions.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transactions.date}</td>
        <td>
            <img onclick="transaction.remove(${index})" src="../assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = utils.formatCurrency(transaction.incomes())

        document
            .getElementById('expenseDisplay')
            .innerHTML = utils.formatCurrency(transaction.expenses())

        document
            .getElementById('totalDisplay')
            .innerHTML = utils.formatCurrency(transaction.total())

    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const utils = {
    formatAmount(value) {
        value = value * 100

        return Math.round(value)
    },

    fotmatDate(date) {
        const spittedDate = date.split("-")

        return `${spittedDate[2]}/${spittedDate[1]}/${spittedDate[0]}`
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

const form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: form.description.value,
            amount: form.amount.value,
            date: form.date.value
        }
    },

    validateFields() {
        const { description, amount, date } = form.getValues()

        if (
            description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() === ""
        ) {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let { description, amount, date } = form.getValues()

        amount = utils.formatAmount(amount)

        date = utils.fotmatDate(date)

        return {
            description,
            amount,
            date
        }
    },

    clearFields() {
        form.description.value = ""
        form.amount.value = ""
        form.date.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            form.validateFields()
            const trs = form.formatValues()
            transaction.add(trs)
            form.clearFields()
            modal.close()
        } catch (error) {
            alert(error.message)
        }
    }
}

const app = {
    init() {

        transaction.all.forEach(DOM.addTransaction)

        DOM.updateBalance()

        storage.set(transaction.all)
    },

    reload() {
        DOM.clearTransactions()
        app.init()
    }
}

app.init()

