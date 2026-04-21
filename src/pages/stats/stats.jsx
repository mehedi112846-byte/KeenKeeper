import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../../Timeline/timelineContext';

const Stats = () => {
    const { timelineData } = useTimeline();

    // finding count data from timeline 
    const dataCounts = timelineData.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
    }, {});

    // formating data for pi chart 
    const chartData = [
        { name: 'Call', value: dataCounts['Call'] || 0, color: '#244D3F' }, // Dark Green
        { name: 'Text', value: dataCounts['Text'] || 0, color: '#8B5CF6' }, // Purple
        { name: 'Video', value: dataCounts['Video'] || 0, color: '#10B981' }, // Emerald
    ];

    // if no data 
    const hasData = timelineData.length > 0;

    return (
        <div className="min-h-screen bg-[#F9FBFC] py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h1 className="text-4xl font-bold text-[#1F2937] mb-2">Friendship Analytics</h1>
                <p className="text-slate-500 mb-10">By Interaction Type</p>

                <div className="h-[400px] w-full flex flex-col items-center justify-center">
                    {!hasData ? (
                        <div className="text-center text-slate-400">
                            <p>No interaction data available yet.</p>
                            <p className="text-sm">Start a check-in to see analytics!</p>
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Stats;