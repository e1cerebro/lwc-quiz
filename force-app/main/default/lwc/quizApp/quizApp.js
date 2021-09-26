import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
	myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
	correctAnswer = 0;
	selected = {}
	isSubmitted = false;
	colorClass = '';

	handleAnswer(event){
		const {name, value} = event.target;
		this.selected = {...this.selected, [name]: value};
	}

	submitQuizHandler(event){
		event.preventDefault();
		this.correctAnswer = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer).length;
		this.isSubmitted = true;
	}

	resetQuizHandler(event){
		this.isSubmitted = false;
		this.colorClass = '';
		this.selected = {};
	}

	get areAllSelected(){
		return !(Object.keys(this.selected).length === this.myQuestions.length);
	}

	get additionalAnswerColor(){
		this.colorClass = 'slds-m-bottom_x-small slds-text-heading_medium ';
		this.colorClass += this.correctAnswer === 3 ? ' slds-text-color_success' : ' slds-text-color_error';
		return this.colorClass;
	}
}