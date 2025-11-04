// Script to run a mixture of text and interactive screens, using built-in and custom jsPsych functionality

// import task info from versionInfo file
import { randCond } from "./versionInfo.js"; 

// import our data saving function
import { saveTaskData, saveQuestData } from "./saveData.js";

// import jspsych object so can access modules
import { jsPsych } from "./constructStudy.js";

// initialize sizing vars
var scaleDisplayWidth = 600;  // in px

///////////////////////////////////////////// INTERVENTION TEXT /////////////////////////////////////////////////////////
var introText= {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  //button_label_previous: "back",
  button_label_next: "继续",
  pages: [`<p><h2>第三部分-背景知识补充</h2></p>
           <p>
           在你开始最后一轮测验前，我们想让你了解一些心理治疗的背景资料。 
           </p>
           <p>
           希望你会觉得这些有所帮助！
           </p>
           `
           ],
  on_start: function () {
    document.body.style.background = "aliceblue";
  }
};

var continueText= {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  //button_label_previous: "back",
  button_label_next: "继续",
  pages: [`<p><h2>现在你可以继续下一阶段测验</h2></p>`],
  on_finish: function() {
    var intEndTime = performance.now(); // this.type.jsPsych.getStartTime();
    saveTaskData('interventionEndTime', intEndTime);
  }
};

////////////////////////////////// PSYCHOEDUCATION (ACTIVE) ////////////////////////////////////////
var pe_background = {
  type: jsPsychInstructions,
  allow_backward: true,
  show_clickable_nav: true,
  allow_keys: true,
  button_label_previous: "上一页",
  button_label_next: "下一页",
  pages: [ /////////////////////page one////////////////////////
          `<br><br><p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
          <p>
          一些心理学家认为，情绪低落并不是由事件本身决定的，而是我们如何去 <i>解释</i> 事件 。
          </p>
          <p>
          <blockquote>比如，如果一个人一直觉得“我是个失败者”，那么 ta 很有可能认为任何负面事情的发生 
          都是 ta 自身的原因，而忽视了事情发生真正的原因。</blockquote>
          </p>
          <p>
          这一点非常重要，因为这解释了为什么经历同一事件的人会有不同的行为或情绪反应。
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/emotions.jpg' style='width:450px;'></img></div>
          <br><br>
          `,
          /////////////////////page two/////////////////////////
          `<br><br><p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
          <p>
          久而久之，那些倾向于以一种消极的方式来解释事件的人可能更容易感到低落。这是因为消极思维和情绪可能会引发负性循环。 
          </p>
          <p>
          <blockquote> 比如，一个人总是觉得自己是个失败者，那么即使是一些能够让人愉快的事情 TA 也不想去干（例如，与亲密的朋友聊天），因为 TA 认为事情最终还是会变得很糟。</blockquote>
          </p>
          <p>
          认知疗法中，思维方式、情绪和行为之间的关系构成了 <b>认知三角</b>。
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/cognitive_triangle.png' style='width:450px;'></img></div>
          <br><br>
          `,
          /////////////////////page three///////////////////////
          `<br><br><p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
          <p>
          认知疗法背后的核心思想之一是，我们是可以有意识地 <i>察觉</i> 并 <i>质疑</i> 负面的、对我们没有帮助的的想法和信念。
          </p>
          <p>
          认知治疗师认为，对这些负面的信念产生质疑能够改变我们解释事件的方式，进而 <b>改变我们对事件的不良情绪反应</b>。
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/identify_challenge.jpg' style='width:450px;'></img></div>
          <br><br>  
          `,
          /////////////////////page four/////////////////////////
          `<br><br><p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
          <p>
          <br><br><br>
          让我们通过一些示例来看看认知疗法是如何在实践中发挥作用的。
          </p>
          <br><br><br>
          `
          ],
  on_start: function() {
    var intStartTime = performance.now(); 
    saveTaskData('interventionStartTime', intStartTime);
  }
};

var pe_example_1 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
                 <br>
                 <p>
                 <b>示例一</b>
                 </p>
                 <p>
                 <blockquote>想象一下，你正走在大街上，一位朋友从你身旁经过，但是没有跟你打招呼</blockquote>
                 </p>
                 <p>对于这件事，可能会产生以下两种不同的思维观念：</p>
                 <div class='float-container'>

                  <div class='float-child'>
                  <p><b>解释 1</b></p>
                    <div class='thought'> “我肯定是做了什么事惹他们不高兴了”</div>
                  </div>  
                 
                  <div class='float-child'>
                  <p><b>解释 2</b></p>
                    <div class='thought'> “或许他们只是没有看见我”</div>
                  </div>

                 </div>

                 <br>
                `,
      },
      {
        type: 'multi-select',
        prompt: `如果你认为解释 1 是正确的，你会有什么样的感受？`, 
        name: 'int_eg1_1', 
        options: ['担心', '紧张', '放松', '无所谓'],
        columns: 0,
        //correct_response: [],  
        required: true
      },
      {
        type: 'multi-select',
        prompt: "如果你认为解释 2 是正确的，你会有什么样的感受？", 
        name: 'int_eg1_2', 
        options: ['担心', '紧张', '放松', '无所谓'],
        columns: 0,
        //correct_response: [],  
        required: true
      },  
      {
        type: 'drop-down',
        prompt: "你认为哪种解释对你最有帮助？", 
        name: 'int_eg1_3', 
        options: ['解释 1', '解释 2'],
        //correct_response: '', 
        required: true
      }, 
    ]
  ],
  show_question_numbers: 'off',
  button_label_finish: '继续',
  required_question_label: "",
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_eg1", respData, respRT);
  }
};

var pe_example_2 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
                 <br>
                 <p>
                 <b>示例 2</b>
                 </p>
                 <p>
                 <blockquote>想象一下，你的领导告诉你他想要提拔你，给你升职加薪</blockquote>
                 </p>
                 以下是对于这件事两种不同的思维观念：
                 <div class='float-container'>

                  <div class='float-child'>
                  <p><b>解释 1</b></p>
                    <div class='thought'> “我工作很努力，能力也很强，得到了领导的认可”</div>
                  </div>  
                 
                  <div class='float-child'>
                  <p><b>解释 2</b></p>
                    <div class='thought'> “老板可能觉得员工在工作了一段时间后，可以适当提拔一下”</div>
                  </div>

                 </div>

                 <br>
                `,
      },
      {
        type: 'multi-select',
        prompt: `如果你认为解释 1 是正确的，你会有什么样的感受？`, 
        name: 'int_eg2_1', 
        options: ['自豪', '激动', '中立', '紧张'],
        columns: 0,
        //correct_response: [],  
        required: true
      },
      {
        type: 'multi-select',
        prompt: "如果你认为解释 2 是正确的，你会有什么样的感受？", 
        name: 'int_eg2_2', 
        options: ['自豪', '激动', '中立', '紧张'],
        columns: 0,
        //correct_response: [],  
        required: true
      },  
      {
        type: 'drop-down',
        prompt: "你认为哪种解释对你最有帮助？", 
        name: 'int_eg2_3', 
        options: ['解释 1', '解释 2'],
        //correct_response: '', 
        required: true
      }, 
    ]
  ],
  show_question_numbers: 'off',
  button_label_finish: '继续',
  required_question_label: "",
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_eg2", respData, respRT);
  }
};

var pe_yourturn_1 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
                 <p>
                 <b>自由作答！</b>
                 </p>
                 <p>
                 <blockquote>现在，请回想一下最近发生在你身上的 <i>负性事件</i>。 比如，一些工作上或者生活和学习中不顺心的人或事情。
                 </p>
                 <p>
                 那一刻你在想什么？</blockquote>
                 </p>
                `,
      },
      {
        type: 'text',
        prompt: `请简单的回答一下，这件事发生时你的感受是什么？`, 
        html: true, 
        name: 'int_yt1_1', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'text',
        prompt: `现在，试试看能不能想出其他能够解释这件事的方式？`, 
        html: true, 
        name: 'int_yt1_2', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'drop-down',
        prompt: `思考一下这两种不同的解释，你会有什么样的感受？你认为哪种解释对于你来说更有帮助`, 
        html: true, 
        name: 'int_yt1_3', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      }, 
      {
        type: 'drop-down',
        prompt: `如果这件事发生在你的同事或朋友身上，你认为哪种解释更可能是真的？`, 
        html: true, 
        name: 'int_yt1_4', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      },
      {
        type: 'drop-down',
        prompt: `如果你在20年后回顾这件事，你觉得再回到那个时候你会选择哪种解释`, 
        html: true, 
        name: 'int_yt1_5', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_yt1", respData, respRT);
  }
};

var pe_yourturn_2 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
                 <p>
                 <b>自由作答</b>
                 </p>
                 <p>
                 <blockquote>现在，回想一下最近发生的一些 <i>正性（积极）</i> 事件，例如，工作或学习很顺利。
                 </p>
                 <p>
                 那一刻你在想什么？</blockquote>
                 </p>
                `,
      },
      {
        type: 'text',
        prompt: `请简单的回答一下，这件事发生时你的感受是什么`,
        html: true, 
        name: 'int_yt2_1', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'text',
        prompt: `现在，试着想出另一种解释。还有其他看待事物的方式吗？`, 
        html: true, 
        name: 'int_yt2_2', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'drop-down',
        prompt: `思考一下这两种不同的解释，你会有什么样不一样的感受？你认为哪种解释对于你来说更有帮助？`, 
        name: 'int_yt2_3', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      }, 
      {
        type: 'drop-down',
        prompt: `如果这件事发生在你的同事或朋友身上，你认为哪种解释更可能是真的？`, 
        name: 'int_yt2_4', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      },
      {
        type: 'drop-down',
        prompt: `如果你在20年后回顾这件事，你觉得再回到那个时候你会选择哪种解释？`, 
        name: 'int_yt2_5', 
        options: ['第一种解释', '第二种解释'],
        //correct_response: '', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_yt2", respData, respRT);
  }
};

var pe_in_summary = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>思维方式影响情绪：认知疗法的核心思想</h2></p>
                 <p>
                 <b>小测验</b>
                 </p>
                 <p>
                 接下来，我们想根据你刚刚阅读的内容问你一些问题。
                 </p>
                 <p>
                 请注意，这些问题只是为了让我们了解刚才的内容是否表述得足够清楚。请根据真实情况进行作答。
                 <b>对于以下几种表述，哪一项最恰当地概括了您刚刚阅读的信息？</b>
                 </p>
                 `,
      },
      {
        type: 'multi-choice',
        prompt: `1`,
        html: true, 
        name: 'int_is_1', 
        options: ['我们的想法就是事实，我们思考和解释事件的方式都是正确的。', 
                  '人们对同一事件的解释可能会有所不同。',
                  '人们总是以消极的方式来解读负面事件'],
        correct_response: '人们对同一事件的解释可能会有所不同。', 
        required: true
      },
      {
        type: 'multi-choice',
        prompt: `2`, 
        html: true, 
        name: 'int_is_2', 
        options: ['我们的想法对我们的情绪和行为没有任何影响。', 
                  '不同的人经历同样的事情总是有同样的感受。',
                  '我们如何解释事件会影响我们对事件发生的情绪反应'],
        correct_response: '我们如何解释事件会影响我们对事件发生的情绪反应', 
        required: true
      },
      {
        type: 'multi-choice',
        prompt: `3`, 
        name: 'int_is_3', 
        options: ['无论我们如何看待这些事件，我们未来回想起这件事的感受都会和现在一样。', 
                  '如果我们能够学会质疑对事件消极的想法，久而久之，就会减少我们对负性事件的不良情绪。'],
        correct_response: 'If we can learn to challenge unhelpful thoughts about events, over time we may come to experience less upsetting reactions to them.', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_is", respData, respRT);
  }
};

////////////////////////////////// EMOTION-FOCUSED (CONTROL) ////////////////////////////////////////
var ef_background = {
  type: jsPsychInstructions,
  allow_backward: true,
  show_clickable_nav: true,
  allow_keys: true,
  button_label_previous: "上一页",
  button_label_next: "下一页",
  pages: [ /////////////////////page one////////////////////////
          `<br><br><p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
          <p>
          情绪是人体内最复杂的生理过程之一。
          </p>
          <p>
          <blockquote>这个词可以追溯到16世纪，源于法语单词 <i>emouvoir</i>，意思是 “激起（煽动）”.</blockquote>
          </p>
          <p>
          情绪影响力很大，它既可以是积极的，也可以是消极的，在日常生活中我们都会经历积极的和消极的情绪。正因为如此，许多心理学家认为情绪是人类重要的一部分。
          </p>
          <p>
          以情绪为中心的治疗主要强调情绪在人们行为中的重要作用。情绪疗法的治疗师认为情绪的作用是告诉人们问题在哪里，并提示他们 <i>应当为此做些什么</i>。
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/emotions.jpg' style='width:450px;'></img></div>
          <br><br>
          `,
          /////////////////////page two/////////////////////////
          `<br><br><p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
          <p>
          以情绪为中心的治疗认为，情绪是 <i>一种信号</i>。消极的情绪能够反映出当前你正处在一个不利的环境中，你原本熟悉并且安全的环境被打破。  
          </p>
          <p>
          <blockquote>以情绪为中心的治疗认为，人们需要学会与情绪和谐相处，而不是试图控制、抑制、避免或逃避情绪体验。</blockquote>
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/signal.jpg' style='width:450px;'></img></div>
          <br><br>
          `,
          /////////////////////page three///////////////////////
          `<br><br><p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
          <p>
          人们可以通过关注自己的身体，学会识别并且 <b>明确</b> 自己当前的感受，将关注情绪的方法融入到日常生活中。可以先向自己承认这些情绪的存在，然后在适当的时候也向他人承认。
          </p>
          <p>
          在明确和承认了自己的情绪之后，人们就可以开始 <b>理解</b> 这些情绪了。要做到这一点，人们必须“用自己的大脑”来理解自己经历的事情，弄清楚他们的感受和情绪可能试图向他们发出什么信号。
          </p>
          <br>
          <div class='center-content'><img src='../assets/imgs/unravel.jpg' style='width:450px;'></img></div>
          <br><br>  
          `,
          /////////////////////page four/////////////////////////
          `<br><br><p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
          <p>
          <br><br><br>
          让我们通过一些示例来看看认知疗法是如何在实践中发挥作用的。
          </p>
          <br><br><br>
          `
          ],
  on_start: function() {
    var intStartTime = performance.now(); 
    saveTaskData('interventionStartTime', intStartTime);
  }
};

var ef_example_1 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
                 <br>
                 <p>
                 <b>示例 1</b>
                 </p>
                 <p>
                 <blockquote>想象一下，你正在外面旅行，你的伴侣告诉你 TA 正在享受独处的时光。</blockquote>
                 </p>
                 <p>
                 听到这句话的之后很容易出现的一种反应是“我的伴侣当前状态很不错，我应该感到放心，但是听到很享受独处，我感到有些失落”。
                 </p>
                 <p>
                 从关注情绪的角度来看，处理这种事情的第一步是 <b>识别</b> 你正在经历的情绪。
                 </p> 
                `,
      },
      {
        type: 'multi-select',
        prompt: `在这种情况下，你认为你会有以下哪种情绪？`, 
        name: 'int_eg1_1', 
        options: ['难过', '孤独', '尴尬', '开心'],
        columns: 0,
        //correct_response: [],  
        required: true
      },
      {
        type: 'multi-choice',
        prompt: "你认为这些情绪可能试图传达什么信号或信息？", 
        name: 'int_eg1_2', 
        options: ['你现在感觉很不安', 
                  '这段感情可能现在岌岌可危', 
                  '目前的感情状态稳定，有安全感'],
        columns: 1,
        //correct_response: [],  
        required: true
      },  
      {
        type: 'multi-choice',
        prompt: "你认为你可能会对这个信号做出什么反应？", 
        name: 'int_eg1_3', 
        options: ['挂断电话，不想回复', 
                  '对你的伴侣说：“当听你说我离开之后你也过的很开心，我感觉你正在远离我。”', 
                  '对你的伴侣说：“我也替你感到开心！”'],
        //correct_response: '', 
        columns: 1,
        required: true
      }, 
    ]
  ],
  show_question_numbers: 'off',
  button_label_finish: '继续',
  required_question_label: "",
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_eg1", respData, respRT);
  }
};

var ef_example_2 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
                 <br>
                 <p>
                 <b>示例 1</b>
                 </p>
                 <p>
                 <blockquote>想象一下，你收到一个亲密朋友发来的信息，说他们在想你</blockquote>
                 </p>
                `,
      },
      {
        type: 'multi-select',
        prompt: `此刻，你会有怎么样的情绪`, 
        name: 'int_eg1_1', 
        options: ['生气', '失落', '高兴', '安心'],
        columns: 0,
        //correct_response: [],  
        required: true
      },
      {
        type: 'multi-choice',
        prompt: "你认为这些情绪可能试图传达什么信号或信息？", 
        name: 'int_eg1_2', 
        options: ['朋友之间的界限变得模糊', 
                  '这段关系可能要破裂', 
                  '你们的相处让人很愉悦'],
        columns: 1,
        //correct_response: [],  
        required: true
      },  
      {
        type: 'multi-choice',
        prompt: "你认为你可能会对这个信号做出什么反应？", 
        name: 'int_eg1_3', 
        options: ['放下手机，不做任何回复', 
                  '回复你的朋友“我现在感觉你很陌生”', 
                  '回复你的朋友“我也很想你”'],
        //correct_response: '', 
        columns: 1,
        required: true
      }, 
    ]
  ],
  show_question_numbers: 'off',
  button_label_finish: '继续',
  required_question_label: "",
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_eg2", respData, respRT);
  }
};

var ef_yourturn_1 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
                 <p>
                 <b>自由作答！</b>
                 </p>
                 <p>
                 <blockquote>回想一下你现在所面临的困境，可能是在工作中，也可能是在家里。</blockquote>
                 </p>
                 <p>
                 在回想这件事的时候，观察脑海中浮现的任何情绪以及身体上的感觉。
                 </p>
                `,
      },
      {
        type: 'text',
        prompt: `请简单地描述一下这些感受`, 
        html: true, 
        name: 'int_yt1_1', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'text',
        prompt: `你觉得这些情绪是在向你传递什么信息？`, 
        html: true, 
        name: 'int_yt1_2', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'drop-down',
        prompt: `你是否能够比较容易地就能分析出这些情绪背后的信息？`, 
        html: true, 
        name: 'int_yt1_3', 
        options: ['不能', '能', '不确定'],
        //correct_response: '', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_yt1", respData, respRT);
  }
};

var ef_yourturn_2 = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
                 <p>
                 <b>自由作答！</b>
                 </p>
                 <p>
                 <blockquote>现在，回想一下你认为目前生活中进展顺利的事情——也许是在工作、恋爱或你喜欢的爱好中。</blockquote>
                 </p>
                 <p>
                 在思考这些事情的时候，观察脑海中浮现的任何情绪或身体感觉。
                 </p>
                `,
      },
      {
        type: 'text',
        prompt: `请简单地描述一下这些感受.`, 
        html: true, 
        name: 'int_yt1_1', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'text',
        prompt: `你觉得这些情绪是在向你传递什么信息？`, 
        html: true, 
        name: 'int_yt1_2', 
        textbox_rows: 2,
        textbox_columns: 60,
        required: true
      },
      {
        type: 'drop-down',
        prompt: `你是否能够比较容易地就能分析出这些情绪背后的信息？`, 
        html: true, 
        name: 'int_yt1_3', 
        options: ['不能', '能', '不确定'],
        //correct_response: '', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_yt2", respData, respRT);
  }
};

var ef_in_summary = {
  type: jsPsychSurvey,
  //title: null,
  pages: [
    [
      {
        type: 'html',
        prompt: `<p><h2>情绪作为信号: 情绪治疗的核心理念</h2></p>
                 <p>
                 <b>总结性提问</b>
                 </p>
                 <p>
                 接下来，我们想根据你刚刚阅读的内容问你一些问题。
                 </p>
                 <p>
                 请注意，这些问题只是为了让我们了解刚才的内容是否表述得足够清楚。请根据真实情况进行作答。
                 </p>
                 <p>
                 <b>对于以下几种表述，哪一项最恰当地概括了您刚刚阅读的信息？</b>
                 </p>
                `,
      },
      {
        type: 'multi-choice',
        prompt: `1`,
        html: true, 
        name: 'int_is_1', 
        options: ['对事件产生情绪化反应的第一步是识别并忽略你所感受到的任何情绪', 
                  '情绪反应的第一步是识别和明确你所感受到的情绪。',
                  '情绪反应的第一步就是忽略你所感受到的任何情绪。'],
        correct_response: '情绪反应的第一步是识别和明确你所感受到的情绪。', 
        required: true
      },
      {
        type: 'multi-choice',
        prompt: `2`, 
        html: true, 
        name: 'int_is_2', 
        options: ['情绪化反应的第二步是暂时里当前情景，', 
                  '情绪反应的第二步是直接投入到你的直觉告诉你去做的事情中。',
                  '情绪反应的第二步是尝试找出这些情绪所要传递的信息是什么。'],
        correct_response: '情绪反应的第二个步骤是尝试找出这些情绪试图传达的信号。', 
        required: true
      },
      {
        type: 'multi-choice',
        prompt: `3`, 
        name: 'int_is_3', 
        options: ['一般来说，当我们试图理解经历的事情时，情绪和感受会妨碍我们，所以我们应该尝试改变或控制它们。', 
                  '总的来说，情绪传递的信息或信号很重要，所以我们应该努力学会与它们和谐相处。'],
        correct_response: '理解情绪传递的信息或信号可以帮助我们调节生活中的积极和消极事件。', 
        required: true
      }
    ]
  ],
  show_question_numbers: 'off',
  required_question_label: "",
  button_label_finish: '继续',
  on_finish: function() {
    // get response and RT data
    var respData = jsPsych.data.getLastTrialData().trials[0].response;
    var respRT = jsPsych.data.getLastTrialData().trials[0].rt;
    saveQuestData("intervention_is", respData, respRT);
  }
};

///////////////////////////////////////////// CONCAT ////////////////////////////////////////////////////////
var timeline_intervention = [];
timeline_intervention.push(introText);
if ( randCond == "psychoed") {
  timeline_intervention.push(pe_background);
  timeline_intervention.push(pe_example_1);  
  timeline_intervention.push(pe_example_2); 
  timeline_intervention.push(pe_yourturn_1);  
  timeline_intervention.push(pe_yourturn_2);
  timeline_intervention.push(pe_in_summary);        
} else {
  timeline_intervention.push(ef_background);
  timeline_intervention.push(ef_example_1);  
  timeline_intervention.push(ef_example_2); 
  timeline_intervention.push(ef_yourturn_1);  
  timeline_intervention.push(ef_yourturn_2);
  timeline_intervention.push(ef_in_summary);  
};
timeline_intervention.push(continueText);  

export { timeline_intervention };