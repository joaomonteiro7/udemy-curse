function pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++ 
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //associar o this a chamada da funçao 
}

new pessoa