<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" width="80" height="80">

  <h3 align="center">Վիրտուալ տերմինալների կառավարման համակարգ</h3>

  <p align="center">
    Վիրտուալ տերմինալների կառավարման համակարգի նախագծման նախագիծ
    <br />
    <br />
    <a href="https://github.com/hgzraryan/Ufar-TMS-Progect">Դիտել փորձնական տարբերակը</a>
    ·
    <a href="https://github.com/hgzraryan/Ufar-TMS-Progect/issues">Հաղորդել սխալի մասին</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Բովանդակություն</summary>
  <ol>
    <li>
      <a href="#about_progect">Նախագծի մասին</a>
      <ul>
        <li><a href="#progect_structure">Նախագծի կառուցվածքը</a></li>
        <li><a href="#progect_test_platform">Նախագծի թեստային միջավայր</a></li>
        <li><a href="#progect_plan">Նախագծի փուլերը</a></li>
      </ul>
    </li>
	<!--
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
	-->
    <li><a href="#license">Լիցենզիա</a></li>
    <li><a href="#progect_team">Նախագծի թիմը</a></li>
	<!--
    <li><a href="#acknowledgments">Acknowledgments</a></li>
	––>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<p id="about_progect"></p>
## Նախագծի մասին
[![Product Name Screen Shot][product-screenshot]](https://example.com)

<!--
There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started.
-->

<p align="right">(<a href="#readme-top">վերադառնալ սկիզբ</a>)</p>


<p id="progect_structure"></p>

### Նախագծի կառուցվածքը


Նախագիծը իրենից ներկայացնում է ավտոմատ կառավարման համակարգ վիրտուալ պոս տերմինալների սպասարկման համար։</br>
Նախագիծը բաղկացած է 3 մասից, "Front", "API Gateway", "DB".</br>
Տվյալների բազայի կառուցվածքի համար նաել [https://github.com/hgzraryan/Ufar-TMS-Progect/blob/main/DATABASE%E2%80%93PGDATA.vsdx](DATABASE–PGDATA.vsdx) ֆայլը </br>
Օգատատերերի կառավարման համար կիրառվելու է AAA (Authentication, Authorization, Accounting) մեթոդը:</br>

* Ֆրոնտային մասը [![React][React.js]][React-url]
* Ապի գեթվեյ [![Csharp][Csharp.com]][Csharp-url]
* Տվյալների բազա [![MySql][MySql.com]][MySql-url]
* Թեստավորում [![selenium][selenium.com]][selenium-url]

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>

</br>

<p id="progect_test_platform"></p>

## Նախագծի թեստային միջավայր

*Հասցե: 161.35.193.18</br>
*Միացման տեսակ։ SSH</br>
*Նույնականացման մեխանիզմ։ Certificate authentification</br>
*Բաց և փակ բանալիներ։ [https://github.com/hgzraryan/Ufar-TMS-Progect/blob/main/keys.zip](keys.zip) ֆայլը</br>
*<u>Գաղտնաբառերը կուղարկվի տելեգրամ ալիքի միջոցով</u>
</br></br>

*Թեստային միջավայրին միանալու համար անհրաժեշտ է բեռնել [https://github.com/hgzraryan/Ufar-TMS-Progect/blob/main/keys.zip](keys.zip)և [https://github.com/hgzraryan/Ufar-TMS-Progect/blob/main/SSH-tools.zip](SSH-tools.zip) ֆայլերը, տեղադրել համակարգչում անհրաժեշտ ծրագրերը, այնուհետև վերբեռնել փակ բանալին։
Հավելյալ տեղեկատվության համար գնալ հետևյալ ղումով [https://www.youtube.com/watch?v=-_xyKYPi8Aw]



<p id="progect_plan"></p>

## Նախագծի փուլերը

### Սպրինտ1 (տևողություն 2 շաբաթ 02.04.2023 – 16.04.2023)

1. "Տվյալների բազաների" թիմի կողմից իրականացնել բազայի կառուցվածքի ստեղծումը։ </br>
2. "Ֆրոնտային մաս" թիմի կողմից անհրաժեշտ է ստեղծել նախնական նույնականացման էջ, որի օգնությամբ հնարավոր կլինի կատարել նույնականացում OAUTH2 [https://oauth.net/2/] կամ JWT [https://www.c-sharpcorner.com/article/jwt-json-web-token-authentication-in-asp-net-core/] տեխնոլոգիայով։</br>
3. "Ապի գեթվեյ" թիմի կողմից անհրաժեշտ է պատրաստել գեթվեյ, որը կունենա 3 endpoint (login, register, unregister)։</br>
4. "Թեստավորում" թիմի կողմից անհրաժեշտ է իրականացնել ֆունկցիոնալի ստուգում և լոադ թեստ։</br>

### JWT մեթոդով հարցման և պատասխանի օրինակ
</br>
***<b>Request</b>***
{</br>
&nbsp;&nbsp;&nbsp;"username": "Jignesh", </br>
&nbsp;&nbsp;&nbsp;"password": "password"</br>
}</br>
***<b>Response</b>***

{</br>
&nbsp;&nbsp;&nbsp;"token" :</br> &nbsp;&nbsp;&nbsp;"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKaWduZXNoIFRyaXZlZGkiLCJlbWFpbCI6InRlc3QuYnRlc3RAZ21haWwuY29tIiwiRGF0ZU9mSm9pbmciOiIwMDAxLTAxLTAxIiwianRpIjoiYzJkNTZjNzQtZTc3Yy00ZmUxLTgyYzAtMzlhYjhmNzFmYzUzIiwiZXhwIjoxNTMyMzU2NjY5LCJpc3MiOiJUZXN0LmNvbSIsImF1ZCI6IlRlc3QuY29tIn0.8hwQ3H9V8mdNYrFZSjbCpWSyR1CNyDYHcGf6GqqCGnY"</br>
}</br>

Թոքենի ապակոդավորման համար օգտվել այս ռեսուրսից [https://jwt.io/]

<!--
### Սպրինտ2 (տևողություն 3 շաբաթ)

1. "Տվյալների բազաների" ։ </br>
2. "Ֆրոնտային մաս" </br>
3. "Ապի գեթվեյ" </br>
4. "Թեստավորում" </br>
-->

<!-- GETTING STARTED -->
<!--
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>

-->

<!-- USAGE EXAMPLES -->
<!--
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>
-->


<!-- ROADMAP -->
<!--
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>
-->


<!-- CONTRIBUTING -->
<!--
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>

-->
<p id="license"></p>

<!-- LICENSE -->
## Լիցենզիա

Տարածված է MIT լիցենզիայի ներքո: Լրացուցիչ տեղեկությունների համար տե՛ս «LICENSE.txt»:

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>


<p id="progect_team"></p>
<!-- CONTACT -->
## Նախագծի թիմը

<p>

<b>Ֆրոնտային մասը</b>
<ul>
	<li>Ինեսա Մովսեսյան</li>
	<li>Արևիկ Նավասարդյան</li>
	<li>Հմայակ Մխիթարյան</li>
</ul>
</p>
<p>
<b>Ապի գեթվեյ</b>
<ul>
	<li>Ռազմիկ Արշակյան</li>
	<li>Հարություն Նավասարդյան</li>
	<li>Էդուարդ Վարդանյան</li>
</ul>
</p>
<p>
<b>Տվյալների բազա<b>

<ul>
	<li>Մարիամ Պողոսյան</li>
	<li>Մարիամ Ղանդիլյան</li>
	<li>Սիլվա Օհանյան</li>
</ul>
</p>
<p>
<b>Թեստավորում</b>
<ul>
	<li>Արիս Նանյան</li>
</ul>
</p>
</br></br>

Նախագծի հղումը: [https://github.com/hgzraryan/Ufar-TMS-Progect/](https://github.com/hgzraryan/Ufar-TMS-Progect/)



<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>



<!-- ACKNOWLEDGMENTS -->
<!--
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">Վերադառնալ սկիզբ</a>)</p>

-->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/hgzraryan/Ufar-TMS-Progect/graphs/contributors



[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/hgzraryan/Ufar-TMS-Progect/network/members


[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/hgzraryan/Ufar-TMS-Progect/stargazers



[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/hgzraryan/Ufar-TMS-Progect/issues



[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/hgzraryan/Ufar-TMS-Progect/blob/main/LICENSE.txt



[product-screenshot]: images/progect-plan.jpg

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[MySql.com]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[MySql-url]: https://MySql.com 

[Csharp.com]: https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white
[Csharp-url]: https://csharp.com 


[selenium.com]: https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white
[selenium-url]: https://selenium.com 


