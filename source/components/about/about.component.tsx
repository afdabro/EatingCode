import * as React from "react";
import { SocialMeta } from "../seo/social.meta.component";
import { RadarChartComponent } from "./radar.chart.component";
require("./about.scss");
const chartWidth = 2000;
const chartHeight = 2000;

export class AboutComponent extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <article>
                <header>
                    <h1 className="app-title">About</h1>
                    <SocialMeta title="About Eating Code" description="The origins of Eating Code for Breakfast" imageUrl="" twitterHandle="" />
                    <nav>
                        <ul>
                            <li><a href="#about-intro">Intro</a></li>
                            <li><a href="#about-career">Career Path</a></li>
                        </ul>
                    </nav>
                </header>
                <section id="about-intro">
                    <article>
                        <header>
                            <h1 className="app-title">Intro</h1>
                        </header>
                        <p className="app-paragraph">
                            I’m glad you’ve made it over to my about page. My name is Andrew Dabrowski. I’m a full stack software engineer. Lately, I’ve been focusing on UX/UI design and data science while applying my knowledge of evolutionary architectures.
                        </p>
                    </article>
                </section>
                <section id="about-career">
                    <article>
                        <header>
                            <h1 className="app-title">Career Path</h1>
                        </header>
                        <p className="app-paragraph">
                            I started “Eating code for Breakfast” back in ’98 as an experiment. I woke up every morning and spent a few hours learning how video games were made.
                            This quickly evolved into developing small video games. In the process, I picked up debugging and ethical hacking skills. At the time,
                            software security was uncharted waters which made for an excellent adventure. I went onto college for Game Software Engineering which involved traditional 
                            software engineering with extensions into other disciplines (ie. Graphics, Physics, AI, Networking). In one particular course, 
                            I wrote my own scripting language and a compiler.  
                        </p>
                        <p className="app-paragraph">
                            After college, I landed a position as a DevOps Engineer where I was able to apply my expertise of script automation and cloud technologies.
                            The role later took on new responsibilities which incorporated my cyber security skills. I parted ways a few years later to start as a Developer in Quality Assurance.
                            In time, I grew into a full stack software engineer with a minor in data science.
                            </p>
                        <aside>
                            <RadarChartComponent w={chartWidth} h={chartHeight} />
                        </aside>
                    </article>
                </section>
            </article>);
    }
}
