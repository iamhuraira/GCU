import { info } from './info.js'

class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
        this.info = info()
    }
    
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        
        const trigger = [
            ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "good day", "greetings", "howdy", "what's up", "sup", "yo", "hiya", "hey there", "hi there", "heya", "howdy", "how do you do", "hi-ya", "aloha", "hola", "bonjour", "ciao", "what's happening", "what's new", "what's good", "what's popping", "what's cracking", "what's cooking", "what's the good word", "what's the story", "what's the news", "what's the latest", "what's the gossip", "what's the haps", "what's the rumpus", "what's the scene", "what's the tale", "what's the poop", "what's the 411", "what's the dilly", "what's the deal", "what's the score", "what's the lowdown"],
            ["how are you", "how are things", "how you doing", ],
            ["what is going on", "what is up", "what's going on", "what's up"],
            ["happy", "amazing", "fantastic", "cool", "fine"],
            ["bad", "bored", "tired", "sad", "angry", "depressed", "unhappy", "mad", "miserable", "depressed", "not good", "not well", "not ok", "not okay", "not so good", "not very well", "not very good", "could be better", "could be worse", "not great", "not so great", "not very great", "not very good", "not very nice", "not very pleasant", "not very happy", "not very pleased", "not very satisfied", "not very content", "not very cheerful", "not very joyful", "not very delighted", "not very elated", "not very jubilant", "not very gleeful", "not very excited", "not very thrilled", "not very euphoric", "not very overjoyed", "not very exultant", "not very rapturous", "not very ecstatic", "not very blissful", "not very enraptured", "not very in seventh heaven"],
            ["thanks", "thank you", "ty", "thx", "thnx", "tysm", "thank you so much", "thanks a lot", "thanks a bunch", "thanks a ton", "thanks heaps", "thanks loads", "thanks loads", "thanks lo"],
            ["how many soc", "soc", "societies", "society", "societies in the college", "society in the college", "societies in college", "society in college", "societies in the university", "society in the university", "societies in university", "society in university"],
            ["list all soc", "names of all soc", "name of all soc", "name all soc", "names all soc", "list all society", "names of all society", "name of all society", "name all society", "names all society", "list all societies", "names of all societies", "name of all societies", "name all societies", "names all societies"],
            ["admins of all soc", "admin of all soc", "admin all soc", "admins all soc", "admins of all society", "admin of all society", "admin all society", "admins all society", "admins of all societies", "admin of all societies", "admin all societies", "admins all societies"],
            ["presidents of all soc", "president of all soc", "president all soc", "presidents all soc", "presidents of all society", "president of all society", "president all society", "presidents all society", "presidents of all societies", "president of all societies", "president all societies", "presidents all societies"],
            ["vice presidents of all soc", "vice president of all soc", "vice president all soc", "vice presidents all soc", "vice presidents of all society", "vice president of all society", "vice president all society", "vice presidents all society", "vice presidents of all societies", "vice president of all societies", "vice president all societies", "vice presidents all societies"],
            ["bye", "good bye", "goodbye", "see you later", "see you", "later", "bye bye", "bye-bye", "bye for now", "farewell", "take care", "catch you later", "see you later", "see you soon", "talk to you later", "till next time", "until next time", "later gator", "in a while crocodile", "see you in a while", "so long", "toodle-oo", "toodles", "adios", "arrivederci", "au revoir", "bon voyage", "sayonara", "aloha", "ciao", "see ya", "cheerio"]
        ];
    
        const reply = [
            ["Hello", "Hi", "It's nice seeing you!"],
            ["I'm doing good... how are you?", "I feel kind of lonely, how are you?", "I feel happy, how are you?", ],
            ["Nothing much", "Exciting things!", "I'm happy to see you!"],
            ["Glad to hear it", "Yayyy!! That's the spirit!"],
            ["There is always a rainbow after the rain!"],
            ["You're welcome", "No problem", "It's my pleasure!", "I'm happy to help!", "Anytime!", "Sure!"],
            [`There are ${this.info.societies.length} societies.`],
            [`Names of all societies are ${this.info.societies.map(society => ` ${society.username}`)}`],
            [`Names of admins of all societies are ${this.info.societies.map(society => ` ${society.username}: ${society.admin}`)}`],
            [`Names of presidents of all societies are ${this.info.societies.map(society => ` ${society.username}: ${society.president}`)}`],
            [`Names of vice presidents of all societies are ${this.info.societies.map(society => ` ${society.username}: ${society.vicePresident}`)}`],
            ["Goodbye, it was a nice talk", "See you later!", "Bye! Come back again soon."]
        ];

        this.info.societies.forEach(society => {
            trigger.push([`admin of ${society.username.toLowerCase()}`])
            reply.push([`Admin of ${society.username} is ${society.admin}`])

            trigger.push([`vice president of ${society.username.toLowerCase()}`])
            reply.push([`Vice president of ${society.username} is ${society.vicePresident}`])

            trigger.push([`president of ${society.username.toLowerCase()}`])
            reply.push([`President of ${society.username} is ${society.president}`])
        });
    
        const alternatives = [
            "I'm not able to answer this!",
            "Sorry I couldn't understand this!",
            "What are you trying to say?",
            "I'm not sure I understand.",
            "Can you please rephrase that?",
        ];

        let item;
        let items;

        for (let x = 0; x < trigger.length; x++) {
            for (let y = 0; y < reply.length; y++) {
                if (lowerCaseMessage.includes(trigger[x][y])) {
                    items = reply[x];
                    item = items[Math.floor(Math.random() * items.length)];
                    this.actionProvider.sendMessage(item);
                    return
                }
            }
        }

        if(!item){
            item = alternatives[Math.floor(Math.random() * alternatives.length)]
            this.actionProvider.sendMessage(item);
        }

        // if (lowerCaseMessage.includes("javascript")) {
        //     this.actionProvider.handleJavascriptList();
        // }
    }
}

export default MessageParser;