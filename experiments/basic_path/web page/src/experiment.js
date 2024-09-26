import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

export function createTimeline(jsPsych) {
    const timeline = []

    const hello_trial_1 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Hello, world!',
        data: { use_for_summary_stat: true },
    }

    const hello_trial_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Hello!',
        data: { use_for_summary_stat: true },
    }

    const hello_trial_3 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Hello, again!',
        data: { use_for_summary_stat: true },
    }

    timeline.push(hello_trial_1, hello_trial_2, hello_trial_3);

    return timeline;
}