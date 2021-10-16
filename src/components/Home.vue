<template>
    <div>
        <div class="section"><h1 class="section-header">Hi! I'm Ruth, a full-stack web dev.</h1></div>
        <div class="section">
            <div class="projects">
                <b-container class="demo stack">
                        <b-row class="center stack-header">my stack</b-row>
                        <b-row>
                            <b-col class="li-icon">
                                <img alt="bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="vue" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="typescript" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="django" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="c#" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="azure" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                            <b-col class="li-icon">
                                <img alt="git" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
                            </b-col>
                        </b-row>
                </b-container>
                <ul>
                    <li class="demo">
                        <a id="cubing" href="https://cubingtrainer.netlify.app/" target="_blank">cubing trainer
                            <div>
                                <img class="demo-image" src="@/assets/cubingtrainer.png" alt="screenshot of cubing timer web app" />
                            </div>
                        </a>
                        <div>a speedcubing timer with chart and import/export</div>
                        <div>[Vue, TypeScript, Bootstrap]</div>
                    </li>
                    <li class="demo">
                        <a id="mdc" href="https://mdcworldmap.herokuapp.com/" target="_blank">MDC world map
                            <div>
                                <img class="demo-image" src="@/assets/mdcmap.png" alt="screenshot of world map web app" />
                            </div>
                        </a>
                        <div>members of the MDC community can mark their location</div>
                        <div>[Django, HTML, CSS, Bootstrap]</div>
                    </li>
                    <li class="demo">
                        <a id="weather" href="https://boringweather.netlify.app/" target="_blank">boring weather
                            <div>
                                <img class="demo-image" src="@/assets/boringweather.png" alt="screenshot of weather web app" />
                            </div>
                        </a>
                        <div>enter zip codes and get the weather</div>
                        <div>[HTML, CSS, jQuery, Bootstrap]</div>
                    </li>
                    <li class="demo">
                        <a id="puppy" href="https://github.com/ruthrootz/puppy-gallery" target="_blank">puppy gallery
                            <div>
                                <img class="demo-image" src="@/assets/puppygallery.png" alt="screenshot of puppy photos mobile app" />
                            </div>
                        </a>
                        <div>an app that displays random adorable puppy pictures</div>
                        <div>[Flutter, <a href="https://placedog.net/" target="_blank">placedog.net</a>]</div>
                    </li>
                    <li class="demo">
                        <a id="quant" href="https://github.com/ruthrootz/quantconnect-trading-algorithm" target="_blank">trading algorithm
                            <div>
                                <img class="demo-image" src="@/assets/alg.png" alt="screenshot of trading algorithm results" />
                            </div>
                        </a>
                        <div>a momentum based allocation algorithm built on QuantConnect</div>
                        <div>[Python, QuantConnect/LEAN]</div>
                    </li>
                    <li class="demo">
                        <a id="goodreads" href="https://www.kaggle.com/ruthrootz/goodreads-data-778-books/code" target="_blank">Goodreads data projects
                            <div>
                                <img class="demo-image" src="@/assets/goodreadsdata.png" alt="screenshot of one of the charts" />
                            </div>
                        </a>
                        <div>Jupyter notebooks visualizing my Goodreads data</div>
                        <div>[Python, Kaggle, Jupyter notebook]</div>
                    </li>
                </ul>
                <ul>
                    <li class="demo">
                        <a id="bwb" href="https://betterwithbooks.transistor.fm/" target="_blank">Better With Books
                            <div>
                                <img class="demo-image" src="@/assets/books.jpg" alt="better with books podcast cover art" />
                            </div>
                        </a>
                        <div>books + good ideas = Better With Books</div>
                    </li>
                    <li class="demo">
                        <a id="awkward" href="https://wasawkwardpod.transistor.fm/" target="_blank">That Was Awkward
                            <div>
                                <img class="demo-image" src="@/assets/awkward.jpg" alt="that was awkward podcast cover art" />
                            </div>
                        </a>
                        <div>two girls talking about psychology and socializing</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Home.ts" />
