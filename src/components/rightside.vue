<template>
    <div class="right-side">
        <div class="right-side-wrapper">
            <div class="header">
                <div class="header-icon">
                    <font-awesome-icon size="2x" :icon="['far', 'star']"/>
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
                    <div class="skill-level">
                        <img src="../assets/skill90level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.javascript') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill80level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.vuejs') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill80level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.react') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill60level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.python') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill70level.png" width="50"/>
                    </div>
                </div>            
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.django') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill50level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.webpack') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill70level.png" width="50"/>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-title">
                        <span>{{ $t('rightside.skills.git') }}</span>
                    </div>
                    <div class="skill-level">
                        <img src="../assets/skill90level.png" width="50"/>
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
            <div class="employment">
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="employment-item">
                    <p class="employment-date">{{ $t('rightside.employment.guidap.date') }}</p>
                    <p class="employment-company">{{ $t('rightside.employment.guidap.company') }}</p>
                    <p class="employment-job">{{ $t('rightside.employment.guidap.job') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.guidap.description1') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.guidap.description2') }}</p>
                </div>
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="employment-item">
                    <p class="employment-date">{{ $t('rightside.employment.inp.date') }}</p>
                    <p class="employment-company">{{ $t('rightside.employment.inp.company') }}</p>
                    <p class="employment-job">{{ $t('rightside.employment.inp.job') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.inp.description1') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.inp.description2') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.inp.description3') }}</p>
                </div>
                <div class="left-line">
                    <div class="left-line-square"></div>
                    <div class="left-line-delimiter"></div>
                </div>
                <div class="employment-item">
                    <p class="employment-date">{{ $t('rightside.employment.ifi.date') }}</p>
                    <p class="employment-company">{{ $t('rightside.employment.ifi.company') }}</p>
                    <p class="employment-job">{{ $t('rightside.employment.ifi.job') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.ifi.description1') }}</p>
                    <p class="employment-description">{{ $t('rightside.employment.ifi.description2') }}</p>
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
                margin-top: 25px;
                .header-icon {
                    border: 3px solid rgba(75, 75, 75, 0.8);
                    border-radius: 50%;
                    padding: 8px;
                    margin-right: 15px;
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
                margin: 10px 0 20px 20px;
                display: grid;
                grid-template-columns: 20px 200px 200px;
                grid-template-rows: 55px 55px 55px 55px;
                .left-line {
                    grid-row-start: 1;
                    grid-row-end: 5;
                    padding-top: 5px;
                }
                .skill-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .skill-title {
                        padding-left: 20px;
                    }
                    .skill-level {
                        padding-right: 12px;
                    }
                }
            }
            .employment {
                margin: 10px 0 20px 20px;
                display: grid;
                grid-template-columns: 20px auto;
                grid-template-rows: 166px 208px 126px;
                .left-line {
                    padding-top: 14px;
                }
                .employment-item {
                    padding-left: 20px;
                    padding-top: 8px;
                    .employment-date {
                        margin-top: 0;
                        margin-bottom: 5px;
                    }
                    .employment-company {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .employment-job {
                        margin-top: 0;
                        margin-bottom: 5px;
                        font-weight: 600;
                    }
                    .employment-description {
                        margin: 0;
                    }
                }
            }


        }
    }
</style>