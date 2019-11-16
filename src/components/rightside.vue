<template>
    <div class="right-side">
        <div class="right-side-wrapper">
            <div class="header">
                <div class="header-icon">
                    <font-awesome-icon size="2x" icon="star"/>
                </div>
                <div class="header-title">
                    <span>{{ $t('rightside.skills.title') }}</span>
                </div>
                <div class="header-delimiter"></div>
            </div>
            <div class="skills">
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.html') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/html.png" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.python') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/python.png" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.javascript') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/javascript.png" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.django') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/django.jpeg" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.vuejs') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/vue.png" width="28"/>
                    </div>
                </div>                
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.webpack') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/webpack.png" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.react') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/react.png" width="28"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.git') }}</span>
                    </div>
                    <div class="skill-logo">
                        <img src="../assets/git.png" width="28"/>
                    </div>
                </div>      
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.project.personal') }}</span>
                    </div>
                </div>  
                <div class="skill-item project">
                    <div class="skill-title">
                        <img src="../assets/github.png" width="22"/>
                        <span class="project-title">{{ $t('rightside.skills.project.github') }}</span>
                    </div>
                </div> 
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.project.animation') }}</span>
                    </div>
                </div>
                <div class="skill-item project">
                    <div class="skill-title">
                        <img src="../assets/codepen.png" width="22"/>
                        <span class="project-title">{{ $t('rightside.skills.project.codepen') }}</span>
                    </div>
                </div> 
            </div>
            <div class="header">
                <div class="header-icon">
                    <font-awesome-icon size="2x" icon="briefcase"/>
                </div>
                <div class="header-title">
                    <span>{{ $t('rightside.employment.title') }}</span>
                </div>
                <div class="header-delimiter"></div>
            </div>
            <div class="list employment">
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="list-item">
                    <p class="list-date">{{ $t('rightside.employment.guidap.date') }}</p>
                    <p class="list-company">{{ $t('rightside.employment.guidap.company') }}</p>
                    <p class="list-job">{{ $t('rightside.employment.guidap.job') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description1') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description2') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description3') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description4') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description5') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description6') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.guidap.description7') }}</p>
                </div>
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="list-item">
                    <p class="list-date">{{ $t('rightside.employment.inp.date') }}</p>
                    <p class="list-company">{{ $t('rightside.employment.inp.company') }}</p>
                    <p class="list-job">{{ $t('rightside.employment.inp.job') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.inp.description1') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.inp.description2') }}</p>
                </div>
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="list-item">
                    <p class="list-date">{{ $t('rightside.employment.ifi.date') }}</p>
                    <p class="list-company">{{ $t('rightside.employment.ifi.company') }}</p>
                    <p class="list-job">{{ $t('rightside.employment.ifi.job') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.ifi.description1') }}</p>
                    <p class="list-description">{{ $t('rightside.employment.ifi.description2') }}</p>
                </div>
            </div>
            <div class="header">
                <div class="header-icon graduation-cap">
                    <font-awesome-icon size="2x" icon="graduation-cap"/>
                </div>
                <div class="header-title">
                    <span>{{ $t('rightside.education.title') }}</span>
                </div>
                <div class="header-delimiter"></div>
            </div>
            <div class="list education">
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="list-item">
                    <p class="list-date">{{ $t('rightside.education.fullstack.date') }}</p>
                    <p class="list-company">{{ $t('rightside.education.fullstack.school') }}</p>
                    <p class="list-job">{{ $t('rightside.education.fullstack.degree') }}</p>
                    <p class="list-description">{{ $t('rightside.education.fullstack.description') }}</p>
                </div>
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="list-item">
                    <p class="list-date">{{ $t('rightside.education.fle.date') }}</p>
                    <p class="list-company">{{ $t('rightside.education.fle.school') }}</p>
                    <p class="list-job">{{ $t('rightside.education.fle.degree') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rightside",
    };
</script>

<style scoped lang="scss">
    .right-side {
        color: rgba(75, 75, 75, 0.8);
        .right-side-wrapper {
            padding: 15px 25px;
            .header {
                display: flex;
                margin-top: 10px;
                .header-icon {
                    border: 3px solid rgba(75, 75, 75, 0.8);
                    border-radius: 50%;
                    padding: 8px;
                    margin-right: 15px;
                    &.graduation-cap {
                        padding: 7px;
                    }
                }
                .header-title {
                    font-size: 20px;
                    font-weight: 600;
                    margin-top: 12px;
                }
                .header-delimiter {
                    border-bottom: 3px solid rgba(75, 75, 75, 0.8);
                    width: 100%;
                    margin: 0 0px 26px 17px
                }
            }
            .left-line {
                .left-line-square {
                    content: "";
                    background: rgba(75, 75, 75, 0.8);
                    border-radius: 10%;
                    width: 10px;
                    height: 10px;
                }
                .left-line-delimiter {
                    margin-top: 5px;
                    border-right: 3px solid rgba(75, 75, 75, 0.8);
                    height: 90%;
                    width: 3px;
                }
            }
            .skills {
                margin: 5px 0 10px 20px;
                display: grid;
                grid-template-columns: 20px 230px 230px;
                grid-template-rows: 30px 30px 30px 30px 35px;
                .left-line {
                    grid-row-start: 1;
                    grid-row-end: 7;
                    padding-top: 16px;
                }
                .skill-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .skill-title {
                        padding-left: 20px;
                    }
                    .skill-logo {
                        padding-right: 12px;
                    }
                    &.project {
                        margin-left: -56px;
                        .project-title {
                            margin-left: 16px;
                        }
                        .skill-title {
                            display: flex;
                        }
                    }
                }
            }
            .list {
                margin: 0px 0 20px 20px;
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 50px 50px;
                .left-line {
                    padding-top: 14px;
                }
                .list-item {
                    padding-left: 20px;
                    padding-top: 8px;
                    .list-date {
                        margin-top: 0;
                        margin-bottom: 5px;
                    }
                    .list-company {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .list-job {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-weight: 600;
                    }
                    .list-description {
                        margin: 0;
                    }
                    ul {
                        margin-top: 6px;
                        margin-bottom: 6px;
                        padding-left: 24px;
                    }
                }
            }
            .employment {
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 260px 162px 124px;
            }
            .education {
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 142px 74px;
            }
        }
    }
</style>