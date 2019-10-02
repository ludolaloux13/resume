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
            padding: 25px 50px;
            .header {
                display: flex;
                margin-bottom: 25px;
                .header-icon {
                    border: 3px solid rgba(75, 75, 75, 0.8);
                    border-radius: 50%;
                    padding: 5px;
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
                    margin: 0 0px 20px 17px
                }
            }
        }

        .skills {
            margin-left: 20px;
            display: grid;
            grid-template-columns: 20px 200px 200px;
            grid-template-rows: 55px 55px 55px 55px;
            .left-line {
                grid-row-start: 1;
                grid-row-end: 5;
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
                    height: 100%;
                    width: 3px;
                }
            }
            .skill-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .skill-title {
                    padding-left: 40px;
                }
                .skill-level {
                    padding-right: 12px;
                }
            }
        }
    }
</style>