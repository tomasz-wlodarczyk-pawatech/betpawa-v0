import * as React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Clock, Flame, ChevronsUp } from "lucide-react";
import {cn} from "@/lib/utils";
import BetButton from "@/components/ui/bet-button";

interface SportCardProps {
    time: string;
    date: string;
    homeTeam: string;
    awayTeam: string;
    league: string;
    sport: string;
    homeOdds: string;
    drawOdds: string;
    awayOdds: string;
    hotSelection?: "home" | "draw" | "away";
    moreMarkets?: number;
    className?: string;
}

export function SportCard({
                              time,
                              date,
                              homeTeam,
                              awayTeam,
                              league,
                              sport,
                              homeOdds,
                              drawOdds,
                              awayOdds,
                              hotSelection,
                              moreMarkets,
                              className,
                          }: SportCardProps) {
    return (
        <Card className={cn("border-border shadow-sm", className)}>
            <CardContent className="p-4 space-y-2">
                {/* Header with time, date and badges */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4"/>
                        <span className="font-medium">{time}</span>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" size="md">
                            2
                        </Badge>
                        <Badge variant="primary" size="md" Icon={ChevronsUp} className="bg-purple-500 text-white">
                        </Badge>
                    </div>
                </div>
                {/* Teams */}
                <div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight mb-1 mt-0">
                            {homeTeam}
                        </h3>
                        <h3 className="text-lg font-semibold text-foreground leading-tight mt-0">
                            {awayTeam}
                        </h3>


                    <p className="text-sm text-muted-foreground mt-2">
                        {sport} / {league}
                    </p>
                </div>
                <div className="flex gap-2">
                    {/* Betting odds */}
                    <BetButton leftValue={'1'} rightValue={homeOdds} className={'flex-1'}
                               Icon={hotSelection === "home" ? Flame : undefined} active={hotSelection === "home"}/>


                    {/* Draw odds */}
                    <BetButton leftValue={'X'} rightValue={drawOdds} className={'flex-1'}
                               Icon={hotSelection === "draw" ? Flame : undefined} active={hotSelection === "draw"}/>


                    {/* Away odds with hot indicator */}
                    <BetButton leftValue={2} rightValue={awayOdds} className={'flex-1'} Icon={hotSelection === "away" ? Flame : undefined}
                               active={hotSelection === "away"}/>


                    {/* More markets indicator */}
                    {/*{moreMarkets && (*/}
                    {/*    <BetButton leftValue={moreMarkets} rightValue={""} Icon={ArrowRight}*/}
                    {/*               className={"bg-white text-black border border-black"}/>*/}


                    {/*)}*/}
                </div>
            </CardContent>
        </Card>
    )
        ;
}
