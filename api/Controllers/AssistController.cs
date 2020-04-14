using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTO;
using api.DTO.Request;
using api.Helper;
using api.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using api.SignalR;
using System.Text.Json;
using Microsoft.AspNetCore.SignalR;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [AllowAnonymous]
    public class AssistController : ControllerBase
    {
        private readonly IRepositoryWrapper _repository;
        private readonly IMapper _mapper;

        private readonly ArrivalHub _arrivalHub;

        public AssistController(IRepositoryWrapper repositoryWrapper, IMapper mapper, ArrivalHub  arrivalHub)
        {
            _repository = repositoryWrapper;
            _mapper = mapper;
            _arrivalHub = arrivalHub;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PanelDTO userPanel)
        {
            var user = new User();
            user.UserId = userPanel.UserId;
            user.FirstName = "Jane";
            user.Name = "Doe";
            user.Birthdate = "27/10/1977";
            user.Nationality = "Belge";
            user.Panel = userPanel;

            var message = JsonSerializer.Serialize(user);

            await _arrivalHub.SendMessage(user.Name, message);
            return Ok(new ResponseDTO { Success = true, Message = "Request transfered to backoffice" });
        }
    }

    public class PanelDTO {
        public string UserId { get; set; }
        public string Position { get; set; }
        public string[] Disabilities { get; set; }
        public string[] Has { get; set; }
        public string[] Needs { get; set; }
    }

    public class User {

        public string UserId { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string Birthdate { get; set; }
        public string Nationality { get; set; }
        public string Handicap { get; set; }
        public PanelDTO Panel { get; set; }
    }
}
