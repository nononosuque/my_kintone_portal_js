import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {DateTime} from 'luxon';

//const App = () => {
//  return <span>Hello from kintone CLI</span>;
//};

(() => {
  kintone.events.on(['portal.show','mobile.portal.show'], (event) => {

    // コーヒーボタンの要素を取得
    const black_coffee = document.querySelectorAll('#blackCoffee')[0];

    // コーヒーボタンに押下された場合の処理を追加する
    black_coffee.addEventListener('click', () => {

      const record = {};
      record['マイログ'] = {
        'value': 'ペットボトル/缶購入'
      }

      record['補助分類'] = {
        'value': 'ブラックコーヒー'
      }

      record['登録日付'] = {
        'value': DateTime.local().toFormat('yyyy-MM-dd')
      }

      record['登録値'] = {
        'value': 1
      }

      const param = {
        app : 41
        , record : record
      }

      return kintone.api(kintone.api.url('/k/v1/record'), 'POST', param,
      (res) => {
        window.alert('マイログアプリへの登録に成功しました。');
        console.log(res);
      }, (error) => {
        window.alert('マイログアプリへの登録に失敗しました。');
        console.log(error);
      })

    });

    //const container = document.createElement('div');
    //kintone.app.getHeaderSpaceElement().append(container);

    //ReactDOM.render(<App />, container);

    return event;
  });
})();
