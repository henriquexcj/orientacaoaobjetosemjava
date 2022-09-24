class veiculo{
    #nome
    #ano
    #forca

    constructor(Motor, a, d, m){
        this.motor = Motor;
        this.#nome = a;
        this.#ano = d;
        this.#forca = m;
    }

    acelerar(){
        return this.motor.acelerar();
    }

    get nome(){
        return this.#nome;
    }
    get ano(){
        return this.#ano;
    }
    get forca(){
        return this.#forca;
    }

    set nome(a){
        this.#nome = a;
    }
    set ano(d){
        this.#ano = d;
    }
    set forca(m){
        this.#forca = m;
    }
}