using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace api.SignalR
{
    public class ArrivalHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

    }
}