<template>
  <div id="app">
    <div id="content">
      <table width="100%">
        <tr>
          <td></td>
          <td><h1 style="font-weight:500;">Microsoft Cognitive Services Speech SDK JavaScript Quickstart</h1></td>
        </tr>
        <tr>
          <td align="right">
            <a href="https://docs.microsoft.com/azure/cognitive-services/speech-service/get-started" target="_blank"
              >Subscription</a
            >:
          </td>
          <td><input id="subscriptionKey" type="text" size="40" :value="subscription" /></td>
        </tr>
        <tr>
          <td align="right">Region</td>
          <td><input id="serviceRegion" type="text" size="40" :value="region" /></td>
        </tr>
        <tr>
          <td></td>
          <td><button id="startRecognizeOnceAsyncButton" @click="startSpeech">Start recognition</button></td>
        </tr>
        <tr>
          <td align="right" valign="top">Results</td>
          <td><textarea id="phraseDiv" style="display: inline-block;width:500px;height:200px"></textarea></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';

@Component
export default class Speech extends Vue {
  private subscription = '12e56a3353324558b39d9131cc5e2620';
  private region = 'westus';
  private phraseDiv!: HTMLTextAreaElement;
  private startRecognizeOnceAsyncButton!: HTMLButtonElement;
  private recognizer!: SpeechSDK.SpeechRecognizer;

  mounted() {
    this.startRecognizeOnceAsyncButton = document.getElementById('startRecognizeOnceAsyncButton') as HTMLButtonElement;
    this.phraseDiv = document.getElementById('phraseDiv') as HTMLTextAreaElement;
  }

  startSpeech() {
    this.startRecognizeOnceAsyncButton.disabled = true;
    this.phraseDiv.innerHTML = '';
    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(this.subscription, this.region);
    speechConfig.speechRecognitionLanguage = 'es-ES';
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    this.recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
    const self = this;
    this.recognizer.recognizeOnceAsync(
      result => {
        self.startRecognizeOnceAsyncButton.disabled = false;
        self.phraseDiv.innerHTML += result.text;
        self.recognizer.close();
        // self.recognizer = undefined;
      },
      err => {
        self.startRecognizeOnceAsyncButton.disabled = false;
        self.phraseDiv.innerHTML += err;
        console.log(err);

        self.recognizer.close();
        // self.recognizer = undefined;
      },
    );
  }
}
</script>

<style></style>
