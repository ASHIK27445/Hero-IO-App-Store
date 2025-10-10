import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
const AppRatingChart = ({app}) => {
    const ratings = app.ratings.map(ratingData=>{
        return {
            name: ratingData.name,
            count: ratingData.count
        }
    })
    const colors = ["#F56565", "#ED8936", "#ECC94B", "#48BB78", "#38B2AC"];
    return(
        <div className='inter-font'>
            <h2 className='text-[#001931] font-semibold text-xl'>Rating</h2>
            <div>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  width={500}
                  height={300}
                  data={ratings}
                  layout='vertical'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type='number' tickFormatter={(value)=>{
                      return value >= 1_000_000 ? `${(value/ 1_000_000).toFixed(1)}M` : `${(value/ 1_000).toFixed(1)}K`
                    }} />
                    <YAxis type='category' dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="count">
                      {ratings.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="border-t-2 border-dotted border-[#627382] my-10 "></div>
        </div>
    )
}
export default AppRatingChart