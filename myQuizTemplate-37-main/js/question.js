class Question{
  constructor(){
      this.heading = createElement("h1")
      this.question = createElement("h3")
      this.option1 = createElement("h4")
      this.option2 = createElement("h4")
      this.option3 = createElement("h4")
      this.option4 = createElement("h4")
  
      this.inputName = createInput("Enter your Name")
      this.inputOption = createInput("Enter the Correct Option")
  
      this.submit = createButton("Submit")
  }
  
  hide(){
      this.inputName.hide()
      this.inputOption.hide()
      this.submit.hide()
  }
  
  display(){
      this.heading.position(360,30)
      this.heading.html("Quiz Game")
  
      this.question.position(80,135)
      this.question.html("Q.What is the largest country in the world?")
  
      this.option1.position(140,180)
      this.option1.html("A. Russia")
  
      this.option2.position(140,200)
      this.option2.html("B. China")
  
      this.option3.position(140,220)
      this.option3.html("C. Canada")
  
      this.option4.position(140,240)
      this.option4.html("D. United States")
  
      this.inputName.position(350,300)
      this.inputOption.position(350,330)
  
      this.submit.position(350, 370)
  
      this.submit.mousePressed(()=>{
          this.inputName.hide()
          this.inputOption.hide()
          this.submit.hide()
  
          contestant.name = this.inputName.value()
          contestant.option = this.inputOption.value();
  
          contestantCount+=1
  
          contestant.update()
          contestant.updateCount(contestantCount)
  
  
             
      })
      
  
  }
  
  
}  

    