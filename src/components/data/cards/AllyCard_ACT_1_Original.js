import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {addition} from "../Addition";

export  const allyCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Мастер меча",
                prize: [
                    historyItems.find(c => c.id === 5),
                ]
            }
        ,
        text: "Вы можете взять (experience) \n или пожертвовать этим \n союзником, чтобы получить \n руну (strength)до конца хода.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "161",
            year: 2018,
        }
    },
]
