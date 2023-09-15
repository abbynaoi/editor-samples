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
        <tr style="height: 73.1875px">
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
        <tr style="height: 67.1875px">
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
  </body>
</html>
`