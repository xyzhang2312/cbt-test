// Script to run task instructions and looping quiz, using built in JsPsych functionality
import { nScenarios, bonusRate, maxBonus } from "./versionInfo.js";

///////////////////////////////////////////// INSTR TEXT /////////////////////////////////////////////////////////
var timeline_instructions_learning = [];

var introText = {
  type: jsPsychInstructions,
  allow_backward: true,
  show_clickable_nav: true,
  allow_keys: false,
  button_label_previous: "上一页",
  button_label_next: "下一页",
  pages: [ /////////////////////page one////////////////////////
          "<p>"+
          "<h2>第二部分-事件场景学习</h2>"+
          "</p>"+
          "<br>"+
          "<p>"+
          "现在即将开始 <b>第二部分的测验</b>，"+
          "这部分测验与第一部分有所不同。"+
          "<br><br><br>"+
          "</p>",
          /////////////////////page two////////////////////////
          "<p>"+
          "<br><br>"+
          "<h2>你需要如何完成测验？</h2>"+
          "<br>"+
          "</p>"+
          "<p>"+
          "一些研究人员认为，<b>人们对于事件的解读是不同的，这取决于当时所处的情绪状态</b>。"+
          "</p>"+
          "<p>"+
          "在这部分测验中，你需要想象 <b>"+nScenarios+" 个不同场景</b> 中的一系列新事件。"+
          "<b>每一种场景代表了不同的情绪状态</b>（尽管我们不会告诉你"+
          "这些情绪具体是什么）。"+
          "</p>"+
          "<br>"+
          "<div class='center-content'><img src='../assets/imgs/3_scenarios.png' style='width:11rem;'></img></div>"+
          "<p>"+
          "这意味着，尽管引起每种情绪的事件是不一样的，"+
          "<b>但是情绪产生的 <i>潜在原因</i> 都是相同的</b>。"+
          "</p>"+
          "<p>"+
          "对于每个场景或情绪状态，你需要做的是试着找出 <i>事件背后的原因</i>。"+
          "<br><br>"+
          "</p>",
          /////////////////////page three////////////////////////
          "<p>"+
          "<br><br>"+
          "<h2>你需要如何完成测验？</h2>"+
          "<br>"+
          "</p>"+
          "<p>"+
          "首先，你需要 <b>阅读每页最上方的事件描述</b>。"+
          "</p>"+
          "<p>"+
          "在事件描述的下方将会呈现事件发生的 <b>两种可能的原因</b>。"+
          "</p>"+
          "<br>"+
          "<div class='center-content'><img src='../assets/imgs/eg3.png' style='width:450px;'></img></div>"+
          "<br>"+
          "<p>"+
          "对于每个事件，你需要 <b>选择一个你认为最能够解释该事件的原因</b>。"+
          "<br><br>"+
          "</p>",
          /////////////////////page four////////////////////////
          "<p>"+
          "<br><br>"+
          "<h2>你需要如何完成测验？</h2>"+
          "<br>"+
          "</p>"+
          "<p>"+
          "在你选择完成之后，将会自动呈现 <b>正确或错误的反馈</b>。"+
          "</p>"+
          "<p>"+
          "如果你选择了正确的解释，你将会看到 ✔，以及“正确”这个词。"+
          "如果你选择了不正确的解释，你将会看到 ✖，以及“错误”这个词。"+
          "<p style='color:green;'>正确的解释将以绿色文本突出显示。"+
          "</p>"+
          "<div class='center-content'><img src='../assets/imgs/corr_incorr.png' style='width:450px;'></img></div>"+
          "<p>"+
          "我们希望每个人能够认真对待场景学习，因此，每个事件选择都有一个 <b>时间限制</b>，"+
          "如果在规定时间内（<b>15秒</b>）没有做出任何选择，屏幕将会显示“你没有及时选择！”。"+
          "然后，你需要重新对该事件做出选择。"+
          "</p>"+
          "<p>"+
          "我们希望每个人尽量不要有太多的超时选择，如果你的超时选择过多，最终数据将会无效，"+
          "<b>每个场景大约需要3分钟</b> 完成（一共"+nScenarios+"个场景）。"+
          "如果需要的话，在每个场景选择之间你可以自行休息。"+
          "<br><br>"+
          "</p>",
          /////////////////////page five////////////////////////
          // "<p>"+
          // "<h2>What do I need to do?</h2>"+
          // "<br>"+
          // "</p>"+
          // "<p>"+
          // "To recap, <b>for each scenario or mood, there is one kind of explanation that is the correct answer</b>. This will stay the same "+
          // "all the way through each scenario, but may change <i>between</i> scenarios."+
          // "</p>"+
          // "<p>"+
          // "Your job during the study is therefore to learn, through trial and error, <b>what you think the "+
          // "right kind of explanation is for that scenario or mood</b>. "+
          // "</p>"+
          // "</p>"+
          // "<div class='center-content'><img src='../assets/imgs/head_why.png' style='width:150px;'></img></div>"+
          // "<p>"+
          // "In order to motivate you to learn the right explanations, all approved submissions will <b>earn a bonus</b> payment, "+
          // "the size of which depends on <b> how many answers you get right</b>. Specifically, you will earn an extra "+bonusRate+" pence "+
          // "for every correct explanation you choose (<b>max possible bonus £"+maxBonus.toFixed(2)+"</b>)."+
          // "</p>"+
          // "<p>"+
          // "We know that reading descriptions of many different events can, over time, "+
          // "start to feel repetitive. However, it is really important for the purposes of our research that "+
          // "we understand how well people can learn about different kinds of explanations for events. "+
          // "</p>"+
          // "<p>"+
          // "We have tried to design our study in a way that makes it as easy as possible for our participants "+
          // "to provide accurate answers. Specifically, as well as giving a <b>bonus payment</b>, we have tried to make sure we have allowed <b>plenty "+
          // "of time in the study completion estimate</b> to fully read all the questions and answers. "+
          // //"A <b>‘progress’ bar</b> has also been included to show <b>how far through the study you are</b> at any one point in time. "+
          // "(If you have any other suggestions - please let us know!)."+
          // "<br><br><br>"+
          // "</p>",
          // /////////////////////page six////////////////////////
          // "<p>"+
          // "<h2>Approval rules for this part of the study</h2>"+
          // "<br>"+
          // "</p>"+
          // "<p>"+
          // "As ensuring that our data is as high quality as possible forms part of our responsibility to the "+
          // "bodies that fund our research, we will also be <b>applying two quality control rules</b> to the "+
          // "data we receive for this study. "+
          // "</p>"+
          // "<ul>"+
          //   "<p><li><b>1. Choice times</b>. Submissions with reading and choice times of <i>less than 1 second "+
          //   "for a majority of trials</i> will not be approved, as it is not possible to properly process "+
          //   "the question and answer information in this time. </li></p>"+
          //   "<p><li><b>2. Time-outs</b>. Submissions with a <i>high number of time-outs (10% or more of choices)</i> "+
          //   "may also not be approved, as it's important for the study results that people try and stay "+
          //   "focused on learning during each scenario. </li></p>"+
          // "</ul>"+
          // "<p>"+
          // "We hope that the above measures are reasonable and clearly explained. If you don't think this is the case, "+
          // "please get in touch and let us know."+
          // "</p>"+
          // "<div class='center-content'><img src='../assets/imgs/thank-you.png' style='width:150px;'></img></div>"+
          // "<p>"+
          // "Above all, <b>we are very grateful to our study participants for volunteering their time to help us "+
          // "with our research</b>. Having quality control checks like the above on our data means that we can "+
          // "be more confident in the conclusions we can draw from online studies, and be more likely "+
          // "to be able to conduct these kind of studies in the future."+
          // "<br>"+
          // "</p>",
          /////////////////////page seven////////////////////////
          "<br>"+
          "<p>"+
          "在你继续第二部分测验之前，你需要 <b>回答一些简短的问题</b>。"+
          "这是为了确保我们已经足够清楚地解释了接下来的测验规则。"+
          "</p>"+
          "<div class='center-content'><img src='../assets/imgs/quiz.png' style='width:200px;'></img></div>"+
          "<p>"+
          "<b>如果你没有把所有的问题都答对，你将会回到这些测验说明的开头部分重新进行选择。"+
          "<br><br><br>"+
          "</p>"
          ],
  on_start: function() {
    //this.type.jsPsych.setProgressBar(0);
  },
  on_finish: function() {
    // var startTime = performance.now(); // this.type.jsPsych.getStartTime();
    // saveStartData(startTime);
  }
};

var quizQuestions = [
  { required: true,
    prompt: "<br><br>"+
            "<p><b>1. 这部分测验的规则是...</b></p>"+
            "<p><b>A</b>  从大多数人的角度出发，对于该事件选择你认为最有可能正确的原因。</p>"+
            "<p><b>B</b>  如果该事件发生在你身上时，你认为最有可能的原因是什么。</p>"+
            "<p><b>C</b>  思考到目前为止导致这个场景或情绪的各种原因，选择你认为最有可能是正确的原因。</p>",
    options: ["A", "B", "C"],
    horizontal: true
  },
  { required: true,
    prompt: "<p><b>2. 这部分测验要求你回想 "+nScenarios+" 个不同场景中发生的事件，思考这些场景的最佳方式是...</b></p>"+
            "<p><b>A</b>  每个场景都代表了不同情绪。这意味着每个场景中的事件将有各种不同的潜在原因，因此这是不可能进行学习的。</p>"+
            "<p><b>B</b>  每个场景都代表了不同情绪。这意味着每个场景中的事件被认为是由相似的原因引起的，但是当场景或情绪发生变化时，事件发生的原因也可能发生变化。</p>"+
            "<p><b>C</b>  每个场景都代表了不同情绪。这意味着在所有场景中，事件很可能由相同的原因来解释。</p>",
    options: ["A", "B", "C"],
    horizontal: true
  },
  { required: true,
    prompt: "<p><b>3. 当我选择了我认为事件背后正确的原因后，我会知道我的选择是正确还是错误。</b></p>"+
            "<p><b>A</b>  为了帮助我学习，不正确的原因将从屏幕上消失。</p>"+
            "<p><b>B</b>  为了帮助我学习，正确的解释将用红色文本突出显示。"+
            "<p><b>C</b>  为了帮助我学习，正确的解释将用绿色文本突出显示。",
    options: ["A", "B", "C"],
    horizontal: true
  },
  // { prompt: "<p><b>4. I understand that some quality-control rules will be applied to my submission. "+
  //           "</b></p>"+
  //           "<p><b>A</b>  Submissions with a high number of timed-out choices from this part of the study will definitely be approved</p>"+
  //           "<p><b>B</b>  Submissions with a high number of timed-out choices from this part of the study may not be approved</p>"+
  //           "<p><b>C</b>  Submissions with a high number of correct choices from this part of the study may not be approved</p>",
  //   options: ["A", "B", "C"],
  //   required: true,
  //   horizontal: true
  // }
];

var nCorrect = 0;
var nQuests = 4;
var introQuiz = {
  type: jsPsychSurveyMultiChoice,
  questions: quizQuestions,
  data: {
    correct_answers: ["C", "B", "C"]  
    //correct_answers: ["C", "B", "C", 'B']
  },
  randomize_question_order: false,
  button_label: "检查答案", 
  on_finish: function (data) {
    // compare answers to correct answers
    nCorrect = 0;
    for (var i=0; i < nQuests; i++) {
      var questID = "Q"+i;
      if (data.response[questID] == data.correct_answers[i]) {
        nCorrect++;
      }
    }
    data.nCorrect = nCorrect;
  }
};

var sorryText = {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  button_label_next: "继续",
  pages: ["<p><h2>抱歉，这次你没有全部答对！</h2></p>"+ 
          "<p>"+
          "请重新阅读测验说明，并再次尝试进行选择。"+
          "</p>"]
};

var if_node = {
  timeline: [ sorryText ],
  condition_function: function(data) {
    if ( nCorrect < nQuests ) {
        return true;
    } else {
        return false;
    }
  }
}

var loop_node = {
  timeline: [ introText, introQuiz ],
  loop_function: function(data) {
    if ( nCorrect >= nQuests ) {
        return false;
    } else {
        return true;
    }
  }
};

var continueText= {
  type: jsPsychInstructions,
  allow_backward: false,
  show_clickable_nav: true,
  allow_keys: true,
  //button_label_previous: "back",
  button_label_next: "继续",
  pages: ["<br><br>"+
          "<p><h2>恭喜！你答对了所有问题！</h2></p>"+
          "<p>"+
          "再次提醒你，我们希望你能够仔细阅读事件说明，然后选择你认为"+
          "<b>最有可能正确的原因</b>。"+
          "</p>"+
          "<p>"+
          "请注意，当你选择过快时，页面可能无法跳转。"+
          "因此，请你尽可能认真、仔细地做出选择。"+
          "</p>"+
          "<p>"+
          "<b>每个场景大约需要3分钟完成</b>，测验共包括 "+nScenarios+" 个不同的场景"+
          "如果需要的话，你可以在不同场景的选择之间进行休息。"+
          "</p>"+
          // "<p>"+
          // "<b>The progress bar at the top of the screen shows you how far you are through this part of the study</b>."+
          // "</p>"
          "<p>"+
          "准备好了吗？请点击 <b>继续</b> 按钮开始测验吧！"+
          "</p>"
          ]
};

///////////////////////////////////////////// CONCAT ////////////////////////////////////////////////////////

timeline_instructions_learning.push(loop_node);        // loop through instructions and quiz until correct
timeline_instructions_learning.push(continueText);     // loop through instructions and quiz until correct
 
export { timeline_instructions_learning };

