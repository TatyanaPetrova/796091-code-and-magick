'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 16;
var BAR_HEIGHT = 40;
var barHeight = CLOUD_HEIGHT - 5 * GAP - TEXT_HEIGHT - 5 * GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCloudText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloudText(ctx, 'Ура, вы победили!', CLOUD_X + 2 * GAP, 3 * CLOUD_Y, '#222');
  renderCloudText(ctx, 'Список результатов:', CLOUD_X + 2 * GAP, 5 * CLOUD_Y, '#222');


  ctx.fillStyle = '#222';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `rgba(0, 0, 255, ${Math.random()})`;
    }
    ctx.fillRect(CLOUD_X + 5 * GAP + (CLOUD_X / 2 + BAR_HEIGHT) * i, CLOUD_HEIGHT - TEXT_HEIGHT - 2 * GAP, BAR_HEIGHT, -(150 * times[i]) / maxTime);

    ctx.fillStyle = '#222';
    ctx.fillText(players[i], CLOUD_X + 5 * GAP + (CLOUD_X / 2 + BAR_HEIGHT) * i, CLOUD_Y * 20 + 5 * GAP);

    ctx.fillText(Math.round(times[i]), CLOUD_X + 5 * GAP + (CLOUD_X / 2 + BAR_HEIGHT) * i, 270 - TEXT_HEIGHT - 3 * GAP - (150 * times[i]) / maxTime);
  }
};
