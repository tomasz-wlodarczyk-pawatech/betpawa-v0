import * as React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Clock, TrendingUp} from "lucide-react";
import {cn} from "@/lib/utils";

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
            <CardContent className="p-4 space-y-4">
                {/* Header with time, date and badges */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4"/>
                        <span className="font-medium">{time}</span>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" size="sm">
                            2
                        </Badge>
                        <Badge variant="primary" size="sm" Icon={TrendingUp}>
                        </Badge>
                    </div>
                </div>

                {/* Teams */}
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                        {homeTeam}
                    </h3>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                        {awayTeam}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {sport} / {league}
                    </p>
                </div>

                {/* Betting odds */}
                <div className="flex items-center gap-4">
                    {/* Home odds */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-1 p-2 rounded border transition-all cursor-pointer min-w-[60px]",
                            hotSelection === "home"
                                ? "bg-green-500 border-green-500 text-white"
                                : "bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900"
                        )}
                    >
                        <span className="text-sm font-bold">1</span>
                        <span className="text-sm font-medium">{homeOdds}</span>
                    </div>

                    {/* Draw odds */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-1 p-2 rounded border transition-all cursor-pointer min-w-[60px]",
                            hotSelection === "draw"
                                ? "bg-green-500 border-green-500 text-white"
                                : "bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900"
                        )}
                    >
                        <span className="text-sm font-bold">X</span>
                        <span className="text-sm font-medium">{drawOdds}</span>
                    </div>

                    {/* Away odds with hot indicator */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-1 p-2 rounded border transition-all cursor-pointer min-w-[80px]",
                            hotSelection === "away"
                                ? "bg-green-500 border-green-500 text-white"
                                : "bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900"
                        )}
                    >
                        <span className="text-sm font-bold">2</span>
                        <div className="flex items-center gap-1">
                            {hotSelection === "away" && (
                                <TrendingUp className="w-3 h-3 text-orange-500"/>
                            )}
                            <span className="text-sm font-medium">{awayOdds}</span>
                        </div>
                    </div>

                    {/* More markets indicator */}
                    {moreMarkets && (
                        <div
                            className="flex items-center justify-center gap-1 p-2 rounded border bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900 transition-all cursor-pointer min-w-[50px]">
                            <span className="text-sm font-bold">{moreMarkets}</span>
                            <span className="text-sm">›</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
