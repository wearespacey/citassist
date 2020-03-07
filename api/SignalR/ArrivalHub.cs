using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace api.SignalR
{
    public class ArrivalHub : Hub
    {
        public async Task NoticeArrival(string message)
        {
            await Clients.All.SendAsync("ArrivalHub", message);
        }

    }
}