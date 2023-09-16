// 全ての要素を持つHTML
export const allHavingElementsHtml = `
<html>
  <head></head>
  <body>
    <p dir="ltr">
      <b><strong>太字</strong></b>
    </p>
    <h2>
      <p dir="ltr"><span>H2タイトル</span></p>
    </h2>
    <h3>
      <p dir="ltr"><span>H3タイトル</span></p>
    </h3>
    <h4>
      <p dir="ltr"><span>H4タイトル</span></p>
    </h4>
    <h3 id="20">
      <p dir="ltr"><span>アンカー</span></p>
    </h3>
    <div
      data-highlighting="true"
      style="border-left: 2px solid rgb(34, 153, 84)"
    >
      <strong
        ><p dir="ltr"><span>グリーン強調</span></p></strong
      >
      <div>
        <p dir="ltr"><span>グリーン強調本文</span></p>
      </div>
    </div>
    <div
      data-highlighting="true"
      style="border-left: 2px solid rgb(8, 78, 189)"
    >
      <strong
        ><p dir="ltr"><span>ブルー強調</span></p></strong
      >
      <div>
        <p dir="ltr"><span>ブルー本文</span></p>
      </div>
    </div>
    <div
      data-highlighting="true"
      style="border-left: 2px solid rgb(208, 24, 11)"
    >
      <strong
        ><p dir="ltr"><span>レッド強調</span></p></strong
      >
      <div>
        <p dir="ltr"><span>レッド本文</span></p>
      </div>
    </div>
    <div
      data-highlighting="true"
      style="border-left: 2px solid rgb(255, 183, 0)"
    >
      <strong
        ><p dir="ltr"><span>イエロー強調</span></p></strong
      >
      <div>
        <p dir="ltr"><span>イエロー強調本文</span></p>
      </div>
    </div>
    <hr data-isdash="true" />
    <img
      src="https://dummyimage.com/200x100/000/fff&text=%E3%82%BF%E3%82%B0"
      alt="タグ"
      width="200"
      height="100"
    />
    <hr data-isdash="false" />
    <iframe
      data-lexical-youtube="https://www.youtube.com/watch?v=bqnlpDEmFUU"
      src="https://www.youtube.com/embed/bqnlpDEmFUU?start=0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
      title="YouTube video"
    ></iframe>
    <table>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p style="text-indent: 40px"><span>11</span></p>
          </th>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p style="text-indent: 20px"><span>12</span></p>
          </th>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p><span>13</span></p>
          </th>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p><span>14</span></p>
          </th>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p><span>15</span></p>
          </th>
        </tr>
        <tr>
          <th
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
              background-color: rgb(242, 243, 245);
            "
          >
            <p style="text-indent: 20px"><span>21</span></p>
          </th>
          <td
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
            "
          >
            <p><span>22</span></p>
          </td>
          <td
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
            "
          >
            <p><span>23</span></p>
          </td>
          <td
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
            "
          >
            <p><span>24</span></p>
          </td>
          <td
            style="
              border: 1px solid black;
              width: 140px;
              vertical-align: top;
              text-align: start;
            "
          >
            <p><span>25</span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <details>
      <summary>
        <p dir="ltr"><span>アコーディオンタイトル</span></p>
      </summary>
      <div>
        <p dir="ltr"><span>アコーディオン本文</span></p>
      </div>
    </details>
    <span data-code="true"
      ><ruby>
        <rb>亜米利加</rb>
        <rp>（</rp>
        <rt>アメリカ</rt>
        <rp>）</rp>
      </ruby>
    </span>
    <div
      data-secret-block="true"
      style="
        background-color: rgb(255, 241, 171);
        padding: 0.25rem 1rem;
        margin-bottom: 0.5rem;
      "
    >
      <p dir="ltr"><span>シークレットブロック</span></p>
    </div>
    <p>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </p>
    <ul>
      <li value="1"><span>箇条書き</span></li>
      <li value="2"><span>箇条書き</span></li>
      <li value="3"><span>箇条書き</span></li>
    </ul>
    <ol>
      <li value="1"><span>番号つき</span></li>
      <li value="2"><span>番号つき</span></li>
      <li value="3"><span>番号つき</span></li>
      <li value="4">
        <b><strong>番号つき（太文字</strong></b>
      </li>
      <li value="5">
        <i
          ><b><strong>番号つき（斜体）</strong></b></i
        >
      </li>
      <li value="6">
        <i
          ><b
            ><mark><strong>番号つき（黄色背景強調）</strong></mark></b
          ></i
        >
      </li>
      <li value="7">
        <u><span>番号つき（下線）</span></u>
      </li>
    </ol>
    <p dir="ltr" style="text-align: right"><span>右揃え</span></p>
    <p dir="ltr" style="text-align: center"><span>中央揃え</span></p>
    <p dir="ltr">
      <span style="color: rgb(255, 0, 0)">赤もじ</span><br /><a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        ><span style="color: rgb(0, 128, 0)">緑文字リンク</span></a
      ><a href="https://google.com"
        ><img
          src="https://dummyimage.com/200x100/000/fff&text=%E3%82%BF%E3%82%B0"
          alt="画像リンク(タグ)"
      /></a>
    </p>
  </body>
</html>
`